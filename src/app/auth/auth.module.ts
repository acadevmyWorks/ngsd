import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent
    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
        ReactiveFormsModule
    ]
})
export class AppAuthModule {}
