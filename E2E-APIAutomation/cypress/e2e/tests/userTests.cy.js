/// <reference types="cypress" />

context('User Module', () => {


  it('User - User Create', () => {

    const postData = {
      "id": 15,
      "username": "sevdayilmaz",
      "firstName": "sevo",
      "lastName": "yilmaz",
      "email": "sevdyilmz@gmail.com",
      "password": "test123",
      "phone": "2122121212",
      "userStatus": 1
    };
    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user",
      body: postData,
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })


  it('User - Get User Info', () => {

    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/sevdayilmaz",
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })

  it('User - User Delete', () => {

    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "DELETE",
      url: "https://petstore.swagger.io/v2/user/sevdayilmaz",
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })

  it('User - User Update', () => {

    const postData = {
      "id": 17,
      "username": "sevdayilmaz",
      "firstName": "sevo",
      "lastName": "yilmaz",
      "email": "sevdyilmz@gmail.com",
      "password": "test123",
      "phone": "333333333",
      "userStatus": 1
    };
    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "PUT",
      url: "https://petstore.swagger.io/v2/user/sevdayilmaz",
      body: postData,
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })

  it('User - User Login', () => {

    const queryData = {
      "username" : "sevdayilmaz",
      "password" : "test123"
    }


    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/login?",
      query: queryData,
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })

  it('User - User Logout', () => {

    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "GET",
      url: "https://petstore.swagger.io/v2/user/logout",
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })

  it('User - User Create With Array', () => {

    const postData= 

      [
        {
         "id": 1,
         "username": "ecoş",
         "firstName": "ece",
         "lastName": "ececik",
         "email": "ece@gmail.com",
         "password": "test123",
         "phone": "2122121213",
         "userStatus": 0
       },
      {
         "id": 2,
         "username": "ecoş1",
         "firstName": "ece1",
         "lastName": "ececik1",
         "email": "ece1@gmail.com",
         "password": "test123",
         "phone": "2122121214",
         "userStatus": 0
       },
      {
         "id": 3,
         "username": "ecoş2",
         "firstName": "ece2",
         "lastName": "ececik2",
         "email": "ece2@gmail.com",
         "password": "test123",
         "phone": "2122121215",
         "userStatus": 0
       }
     ];
    

    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithArray",
      body: postData,
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })
  
  
  it('User - User Create With List', () => {

    const postData= 

      [
        {
         "id": 1,
         "username": "ecoş",
         "firstName": "ece",
         "lastName": "ececik",
         "email": "ece@gmail.com",
         "password": "test123",
         "phone": "2122121213",
         "userStatus": 0
       },
      {
         "id": 2,
         "username": "ecoş1",
         "firstName": "ece1",
         "lastName": "ececik1",
         "email": "ece1@gmail.com",
         "password": "test123",
         "phone": "2122121214",
         "userStatus": 0
       },
      {
         "id": 3,
         "username": "ecoş2",
         "firstName": "ece2",
         "lastName": "ececik2",
         "email": "ece2@gmail.com",
         "password": "test123",
         "phone": "2122121215",
         "userStatus": 0
       }
     ];
    

    const headerData = {
      "accept": "application/json",
      "Content - Type": "application/json"

    };

    cy.request ({
      method: "POST",
      url: "https://petstore.swagger.io/v2/user/createWithList",
      body: postData,
      header: headerData
    }).then((response)=> {
      expect(response.status).to.eq(200)
    })

  })


})
