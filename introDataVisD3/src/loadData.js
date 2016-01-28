// Load the file that configures the items and their order.
export default function loadData(controller){
  d3.json("items.json", function (err, items) {

    items.forEach(function (item, i) {

      // Assign an index to each item.
      item.index = i;

      // Of no type specified, default to "block".
      item.type = item.type || "block";
    });
   
    // Set the state from the loaded data.
    controller.setItems(items);
  });
}
