describe('Api Alurapic', () => {
    
        it('Fotos do usuário', () => {
            cy.request({
                method: 'GET' ,
                url: 'https://alurapic-api.onrender.com/alinemacedo/photos'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
                expect(res.body).is.not.empty
                expect(res.body[0]).to.have.property('description')
                expect(res.body[0].description).to.be.equal('Flor amarela')
                
            })
        })
    })
    