// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioKey = 'usuarioLogado';

  constructor() {}

  /**
   * Simula login salvando os dados do usuário
   */
  login(email: string, senha: string): boolean {
    // Exemplo: aqui poderia chamar uma API real.
    // Por enquanto vamos simular.
    if (email === 'corretor@teste.com' && senha === '123456') {
      const usuario = {
        id: 1,
        nome: 'João Corretor',
        email: email,
        role: 'corretor',
        token: 'fake-jwt-token'
      };
      localStorage.setItem(this.usuarioKey, JSON.stringify(usuario));
      return true;
    }

    if (email === 'cliente@teste.com' && senha === '123456') {
      const usuario = {
        id: 2,
        nome: 'Maria Cliente',
        email: email,
        role: 'cliente',
        token: 'fake-jwt-token'
      };
      localStorage.setItem(this.usuarioKey, JSON.stringify(usuario));
      return true;
    }

    return false;
  }

  /**
   * Retorna o usuário logado
   */
  getUsuario(): any {
    const usuarioStr = localStorage.getItem(this.usuarioKey);
    return usuarioStr ? JSON.parse(usuarioStr) : null;
  }

  /**
   * Retorna o token JWT (simulado aqui)
   */
  getToken(): string | null {
    const usuario = this.getUsuario();
    return usuario ? usuario.token : null;
  }

  /**
   * Verifica se está logado
   */
  isLoggedIn(): boolean {
    return !!this.getUsuario();
  }

  /**
   * Faz logout e limpa dados
   */
  logout(): void {
    localStorage.removeItem(this.usuarioKey);
  }
}
