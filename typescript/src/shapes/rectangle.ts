class Rectangle implements Shape {
    private height: number;
    private width: number;
  
    constructor(height: number, width: number) {
      this.height = height;
      this.width = width;
    }
  
    computeArea(): number {
      return this.height * this.width;
    }
  }
