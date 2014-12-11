describe('chatpage', function() {
  before(function(){
    casper.start('http:localhost:3000/');
  });

  it('can be opened', function() {
    casper.then(function() {
      expect("body").to.contain.text("CHATTER");
    });
  });

  it('can display messages', function() {
    casper.then(function() {
      'form'.should.be.inDOM.and.be.visible
      'input[id="m"]'.should.be.inDOM.and.be.visible
      this.fill('form',{
        message: 'hello'
      }, true);
    this.click('button')
    });
    casper.then(function(){
      expect('body').to.contain.text('hello');
    });
  });
});