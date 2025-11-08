// api.ts
class Api {
  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    try {
      const res = await fetch(url, options);
      
      if (!res.ok) {
        throw new Error('Что то не так с запросом!');
      }
      
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async post<T>(url: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>('POST', url, options);
  }

  async delete<T>(url: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>('DELETE', url, options);
  }

  async put<T>(url: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>('PUT', url, options);
  }

  private async request<T>(method: string, url: string, options: RequestInit = {}): Promise<T> {
    try {
      const res = await fetch(url, { method, ...options });
      
      if (!res.ok) {
        throw new Error('Что то не так с запросом!');
      }
      
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default Api;