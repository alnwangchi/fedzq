// 寫入 localstorage
export const setLocalStorage = (key: string, value?: string) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('寫入 localstorage 時發生錯誤:', error);
  }
};

// 從 localstorage 讀取
export const getLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key);
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error('從 localstorage 讀取時發生錯誤:', error);
    return null;
  }
};
