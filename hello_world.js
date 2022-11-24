looker.plugins.visualizations.add({
  id: "hello_world",
  label: "Hello World",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [
        {"Large": "large"},
        {"Small": "small"}
      ],
      display: "radio",
      default: "large"
    }
  },
  // Set up the initial state of the visualization
  create: function(element, config) {

    // Insert a <style> tag with some styles we'll use later.
    var css = element.innerHTML = `
      <style>
        .hello-world-vis {
          /* Vertical centering */
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
        }
        .hello-world-text-large {
          font-size: 72px;
          font-size_pop: 22px;
        }
        .hello-world-text-small {
          font-size: 18px;
          font-size-pop: 18px;
        }
      </style>
    `;

    // Create a container element to let us center the text.
    var container = element.appendChild(document.createElement("div"));
    container.className = "hello-world-vis";

    // Create an element to contain the text.
    this._textElement = container.appendChild(document.createElement("div"));
    this._textElement2 = container.appendChild(document.createElement("div2"));

  },
  // Render in response to the data or settings changing
  update: function(data, element, config, queryResponse) {

    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({title: "No Dimensions", message: "This chart requires dimensions."});
      return;
    }

    // Grab the first cell of the data
    var firstRow = data[0];
    var firstCell = firstRow[queryResponse.fields.measures[0].name];
    var firstDim = firstRow[queryResponse.fields.dimensions[0].name];
    

    // Insert the data into the page
    // This would be unstyled, you'd have to actually construct the HTML string if you wanted it styled
    this._textElement.innerHTML = firstCell;
    this._textElement2.innerHTML = firstDim;
    // Insert the data into the page
    //this._textElement.innerHTML = LookerCharts.Utils.htmlForCell(firstCell);

    // Set the size to the user-selected size
    if (config.font_size == "small") {
      this._textElement.className = "hello-world-text-small";
    } else {
      this._textElement.className = "hello-world-text-large";
    }
    
    if (config.font_size_pop == "small") {
      this._textElement2.className = "hello-world-text-small";
    } else {
      this._textElement2.className = "hello-world-text-large";
    }

  }
});
