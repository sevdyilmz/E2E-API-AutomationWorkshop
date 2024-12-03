/// <reference types="cypress" />

context('User Module', () => {


    it('User - User Create', () => {

     const responseData = {
            "code": 200,
            "type": "unknown",
            "message": "15"
        };


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
        expect(response.body).to.have.property("code").equals(200)
        expect(response.body).to.have.property("type").equals("unknown")
        expect(response.body).to.have.property("message").equals("15")
        expect(response.body).to.have.deep.equal(responseData)
      })
  
    })
  
})  