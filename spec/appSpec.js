describe("App", () => {
  const button = document.querySelector('#click-me');
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      button.click();
      expect(counter.textContent).toBe('120');

    })
  })

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.id).toBe('click-me')
    })
  })

  describe("factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(1)).toBe(1)
      expect(factorial(2)).toBe(2)
      expect(factorial(3)).toBe(6)


    })

    it("returns 1 if the provided number is less than 1 ", () => {
      expect(factorial(0)).toBe(1)
    })
  })

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
       harsh = new Computer;
       expect(harsh.hardDriveSpace).toBe(512)
        })

    describe("installProgram", () => {
      harsh = new Computer;
      beforeEach(function(done){
        harsh.installProgram(480,function(){
          done();
        })
      })
      it("can install a program if there is sufficient space", (done) => {
    expect(harsh.hardDriveSpace).toBe(32)
     done();
      })
    })
      describe("installProgram", () => {
        harsh = new Computer;
        beforeEach(function(done){
          harsh.installProgram(780,function(){
            done();
          })
        })
      it("will not install the program if there is insufficient space", (done) => {
      expect(harsh.hardDriveSpace).toBe(512)
       done();
      })
   })

      describe("format", () => {
      
      it("resets the hard drive to 512, even after programs have been installed", () => {
         harsh = new Computer;
        harsh.format();
        expect(harsh.hardDriveSpace).toBe(512)
        
  
      });
    })

  })

})
