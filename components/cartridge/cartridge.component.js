function CartridgeController() {
  var ctrl = this;
}
angular.module("myApp").component("cartridge", {
  templateUrl: "components/cartridge/cartridge.html",
  controller: CartridgeController,
  bindings: {
    gamename: "@",
    lhs: "@",
    rhs: "@",
    colour: "@",
    image: "@",
  },
});
