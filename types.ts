import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  price: string;
  image: string;
  features: string[];
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  guests: number;
  name: string;
  phone: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}