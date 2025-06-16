import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { api } from '../../shared/api';

const API_BASE_URL = api;

interface NewsData {
  title: string;
  date: string;
  author: string;
  description: string;
  changelog: string;
  password: string;
}

const Admin: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'create' | 'delete'>('create');
  const [newsData, setNewsData] = useState<NewsData>({
    title: '',
    date: '',
    author: '',
    description: '',
    changelog: '',
    password: ''
  });
  const [deleteData, setDeleteData] = useState({
    title: '',
    password: ''
  });
  const [message, setMessage] = useState<{text: string, type: 'success' | 'error'} | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewsData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDeleteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeleteData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/news/create`, newsData);
      
      setMessage({ 
        text: response.data.message || 'Новость создана и отправлена в Telegram!', 
        type: 'success' 
      });
      setNewsData({
        title: '',
        date: '',
        author: '',
        description: '',
        changelog: '',
        password: ''
      });
    } catch (error: any) {
      setMessage({ 
        text: error.response?.data?.message || 'Ошибка при создании новости', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  const handleDeleteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await axios.post(`${API_BASE_URL}/news/delete`, deleteData);
      
      setMessage({ 
        text: response.data || 'Новость успешно удалена!', 
        type: 'success' 
      });
      setDeleteData({
        title: '',
        password: ''
      });
    } catch (error: any) {
      setMessage({ 
        text: error.response?.data?.message || 'Ошибка при удалении новости', 
        type: 'error' 
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 5000);
    }
  };

  return (
    <div className={styles.adminContainer}>
      <header className={styles.header}>
        <h1>Панель управления новостями</h1>
        <p className={styles.subtitle}>Создание и управление новостями</p>
      </header>

      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          <span className={styles.messageIcon}>
            {message.type === 'success' ? '✓' : '⚠'}
          </span>
          {message.text}
        </div>
      )}

      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => setActiveTab('create')}
        >
          <span className={styles.tabIcon}>✏️</span> Создать новость
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'delete' ? styles.active : ''}`}
          onClick={() => setActiveTab('delete')}
        >
          <span className={styles.tabIcon}>🗑️</span> Удалить новость
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'create' ? (
          <form onSubmit={handleCreateSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="title">Заголовок</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={newsData.title}
                  onChange={handleCreateChange}
                  placeholder="Введите заголовок новости"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="date">Дата</label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={newsData.date}
                  onChange={handleCreateChange}
                  placeholder="Например: 16 июня 2023"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="author">Автор</label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={newsData.author}
                  onChange={handleCreateChange}
                  placeholder="Имя автора"
                  required
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="description">Описание</label>
                <textarea
                  id="description"
                  name="description"
                  value={newsData.description}
                  onChange={handleCreateChange}
                  rows={4}
                  placeholder="Краткое описание новости"
                  required
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="changelog">Список изменений (по одному на строку)</label>
                <textarea
                  id="changelog"
                  name="changelog"
                  value={newsData.changelog}
                  onChange={handleCreateChange}
                  rows={6}
                  placeholder="Перечислите ключевые изменения"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Пароль администратора</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={newsData.password}
                  onChange={handleCreateChange}
                  placeholder="Введите пароль"
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isLoading}>
              {isLoading ? (
                <span className={styles.buttonLoader}></span>
              ) : (
                'Опубликовать новость'
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleDeleteSubmit} className={styles.form}>
            <div className={styles.formGrid}>
              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="deleteTitle">Заголовок новости для удаления</label>
                <input
                  type="text"
                  id="deleteTitle"
                  name="title"
                  value={deleteData.title}
                  onChange={handleDeleteChange}
                  placeholder="Введите точный заголовок новости"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="deletePassword">Пароль администратора</label>
                <input
                  type="password"
                  id="deletePassword"
                  name="password"
                  value={deleteData.password}
                  onChange={handleDeleteChange}
                  placeholder="Введите пароль"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitButton} ${styles.deleteButton}`} 
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.buttonLoader}></span>
              ) : (
                'Удалить новость'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Admin;