// src/app/guards/corretor.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // exemplo de serviço de autenticação

@Injectable({
  providedIn: 'root'
})
export class CorretorGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const usuario = this.authService.getUsuario();

    if (usuario && usuario.role === 'corretor') {
      return true; // tem permissão
    }

    // se não for corretor, redireciona para login ou página de acesso negado
    this.router.navigate(['/acesso-negado']);
    return false;
  }
}
