import { Injectable } from '@angular/core';
import { ListBuilder } from '../../Shared/builder';
// import {  } from '';
// import {  } from '';

@Injectable({
  providedIn: 'root'
})
export class LinkedListService
{
  start: null;
  end: null;

  newNode = ListBuilder.node({
    data: '',
    nextNode: null
  });
  newList = ListBuilder.linkedList({
    head: null,
    size: 0
  });


  constructor( )
  {

  }

  insertFirst( data ): void
  {
    // Set the Head of new list to to new Node
    this.newList.head = this.newNode;
    // Set the next node to equal the first node
    this.newNode.nextNode = this.start;
    // Set start to the head of the new list
    this.start = this.newList.head;
    // Set the data of first node to equal data entered in
    this.newNode.data = data;
  }

}
console.log(this.insertFirst(100));
