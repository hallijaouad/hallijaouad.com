import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SectionContainerComponent } from '../../shared/components/section-container/section-container.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, SectionContainerComponent, SectionTitleComponent],
  template: `
    <app-section-container class="py-16">
      <app-section-title 
        title="Contact" 
        subtitle="Parlons de vos projets"
      />
      
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <h3 class="text-2xl font-semibold mb-4">Restons en contact</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            N'hésitez pas à me contacter pour discuter de vos projets ou 
            pour toute opportunité de collaboration.
          </p>
          
          <div class="space-y-4">
            <a 
              href="https://www.linkedin.com/in/jhalli/" 
              target="_blank"
              class="flex items-center text-primary-600 hover:text-primary-700"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/hallijaouad" 
              target="_blank"
              class="flex items-center text-primary-600 hover:text-primary-700"
            >
              GitHub
            </a>
          </div>
        </div>
        
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Nom
            </label>
            <input
              type="text"
              id="name"
              formControlName="name"
              class="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="mt-2 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            >
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              formControlName="message"
              rows="4"
              class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            ></textarea>
          </div>
          
          <button
            type="submit"
            [disabled]="!contactForm.valid"
            class="btn-primary w-full"
          >
            Envoyer
          </button>
        </form>
      </div>
    </app-section-container>
  `
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Implement form submission logic here
    }
  }
}