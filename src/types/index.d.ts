import React from "react";

export type HeaderProps = {
  children: React.ReactNode;
  classname?: string;
};


export type UserType = 'creator' | 'editor' | 'viewer' ; 

export type CreateDocumentParams = {
  userId: string | string[]
  email: string
}