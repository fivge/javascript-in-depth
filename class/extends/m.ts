export module quz {
  class Base {
    log = () => {
      console.log("hello world");
    };
  }

  class Child extends Base {
    // ERROR : only `public` and `protected` methods of base class are accessible via `super`
    logWorld() {
      super.log();
    }
  }
}
