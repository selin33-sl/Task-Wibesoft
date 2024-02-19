import React from 'react'
import { TodoWrapperLocalStorage } from './TodoWrapperLocalStorage'
describe('<TodoWrapperLocalStorage />', () => {
  // Wrapper componentin render edilip edilmediğini kontrol eden test
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoWrapperLocalStorage />)
  })
  // Yeni bir task ekleyip eklemediğini kontrol eden test 
  it('adds todo and updates localStorage', () => {
    const todoWrapper = <TodoWrapperLocalStorage />;
    cy.mount(todoWrapper);

    // Ekleme işlevini tetikle
    cy.get('.todo-input').type('New Task{enter}');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(1);
      expect(parsedTodos[0].task).to.equal('New Task');
    });
  });
  // Bir taskı tamamlamaya basınca kontrol eden test 
  it('toggles completion status and updates localStorage', () => {
    const todoWrapper = <TodoWrapperLocalStorage />;
    cy.mount(todoWrapper);

    // Ekleme işlevini tetikle
    cy.get('.todo-input').type('New Task{enter}');

    // Tamamlama durumunu kontrol et (başlangıçta tamamlanmamış olmalı)
    cy.get('.completed').should('not.exist');
    
    // Tamamlama durumunu toggle et
    cy.get('.checkbox').click();

    // Tamamlanmış görevin görünmesini kontrol et
    cy.get('.completed').should('exist');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(1);
      expect(parsedTodos[0].completed).to.be.true;
    });
  });
  // Bir taskı güncelleyip güncellenmediğni  kontrol eden test 
  it('edits task and updates localStorage', () => {
    const todoWrapper = <TodoWrapperLocalStorage />;
    cy.mount(todoWrapper);

    // Ekleme işlevini tetikle
    cy.get('.todo-input').type('New Task{enter}');

    // Edit moduna geç
    cy.get('.edit-icon').click();

    // Düzenleme inputunu bul ve yeni bir değer gir
    cy.get('.edit-todo-input').type(' Edited{enter}');
    // Edit modundan çık
    cy.get('.todo-btn').click();

    // Düzenlenmiş görevin görünmesini kontrol et
    cy.contains('New Task Edited').should('exist');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(1);
      expect(parsedTodos[0].task).to.equal('New Task Edited');
    });
  });
  // Bir taskı sildiğini kontrol eden test 
  it('deletes todo and updates localStorage', () => {
    const todoWrapper = <TodoWrapperLocalStorage />;
    cy.mount(todoWrapper);

    // Ekleme işlevini tetikle
    cy.get('.todo-input').type('New Task{enter}');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(1);
    });

    // Silme işlevini tetikle
    cy.get('.delete-icon').click();

    // Silinen görevin görünmemesini kontrol et
    cy.contains('New Task').should('not.exist');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(0);
    });
  });
  // Searche bir değer girdiğinde datanın değişimini kontrol eden test 
  it('updates filtered todos on search term change', () => {
    const todoWrapper = <TodoWrapperLocalStorage />;
    cy.mount(todoWrapper);

    // Ekleme işlevini tetikle
    cy.get('.todo-input').type('Task 1{enter}');
    cy.get('.todo-input').type('Task 2{enter}');
    cy.get('.todo-input').type('Task 3{enter}');

    // localStorage kontrolü
    cy.window().its('localStorage.todos').should('exist');
    cy.window().its('localStorage.todos').then((todos) => {
      const parsedTodos = JSON.parse(todos);
      expect(parsedTodos).to.have.lengthOf(3);
    });

    // Search inputuna bir değer gir
    cy.get('.search-input').type('Task 2');

    // Filtrelenmiş görevlerin sadece Task 2'yi içermesi gerektiğini kontrol et
    cy.get('.Todo').should('have.length', 1);
    cy.contains('Task 2').should('exist');
    cy.contains('Task 1').should('not.exist');
    cy.contains('Task 3').should('not.exist');
  });
})