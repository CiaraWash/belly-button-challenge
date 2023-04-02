// Sort the data by Greek search results descending
let sampledata = data.sort((a, b) => b.sample_values - a.sample_values);

// Slice the first 10 objects for plotting
slicedData = sortedbyotu_ids.slice(0, 10);

// Reverse the array to accommodate Plotly's defaults
reversedData = slicedData.reverse();

// Trace1 for
let trace1 = {
  x: reversedData.map(object => object.sample_values),
  y: reversedData.map(object => object.otu_ids),
  text: reversedData.map(object => object.otu_ids),
  name: "",
  type: "bar",
  orientation: "h"
};

let traceData = [trace1];

t = {
    title: "Top 10 OTU Id's",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  Plotly.newPlot("plot", traceData, layout);
