class computer {
    constructor(type, quantity) {
      this.type = type;
      this.quantity = quantity;
    }
  }
  class desktop extends computer {
    constructor(type, quantity , model) {
      super(name, quantity);
      this.model = model;
    }
  }
  class laptop extends computer {
    constructor(type, quantity , model) {
      super(name, quantity);
      this.model = model;
    }
  }
  class Basket {
    constructor() {
      this.computers = [];
    }
    addProduct(total, computer) {
      this.computers.push(...Array(total).fill(computer));
    }
    calcTotal() {
      return this.computers
        .map(computer => computer.quantity)
        .reduce((a, b) => a + b, 0);
    }
    printInventory() {
      alert('Total intentory of Laptops and Desktops: ' + this.calcTotal());
    }
  }
  
  const HP = new desktop('HP', 1, 'Pevelion');
  const Asus = new laptop('Asus', 1, 'Alien2000');
  const Apple = new laptop('Apple', 1, 'MacBook Pro');
  const basket = new Basket();
  basket.addProduct(25, HP);
  basket.addProduct(13, Asus);
  basket.addProduct(10, Apple);
  
  basket.printInventory();