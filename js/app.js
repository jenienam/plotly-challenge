
d3.json("samples.json").then((data)=> {
    console.log("data:", data);

    //names
    let names = data.filter(names);
    let drop_down = d3.select("#selDataset");
    names.forEach(id => drop_down.append("option").text(id))

    //for metadata
    var MetaData = data.metadata[0]
    Object.entries(MetaData).forEach(([key, value]) => {
        d3.select("#sample-metadata").append("ul").text(`${key} :  ${value}`)
    });

    //barchart stuff
    //patient data from here 
    let patients = data.sample[0].sampe_values
    console.log("Patients:", patients)
    let patients_10 = data.samples[0].patients.slice(0, 10).reverse()
    console.log("Top 10 Sample Values:", patients_10);
    //otuIds
    let otu_ids = data.samples[0].otu_ids
    console.log("Otu_ids:", otu_ids)
    let otu_ids_10 = data.samples[0].otu_ids.slice(0, 10).reverse()
    console.log("Otu_ids_10:", otu_ids_10)
    //labels
    let otu_labels = data.samples.otu_labels
    console.log("otu_labels:", otu_labels)
    let otu_labels_10 = data.samples[0].otu_labels.slice(0, 10).reverse()
    console.log("otu_labels_10:", otu_labels_10)
    
   //actual barchart making
    var trace1 = {
    type: "bar",
    x: patients_10,
    y: otus_id_10,
    text: otu_labels_10,
    orientation: "h",
     };
    var data = [trace1];
    var layout = {
    title: "Horizontal Bar Chart",
    };
    Plotly.newPlot("bar", data, layout);
    
    //bubble
    let trace2= {
    x: otu_ids,
    y: patients,
    text: otu_labels
    }
    var datas = [trace2];
    var layout2 = {
        height: 600,
        width: 1000
    }
    Plotly.newPlot("bubble", datas, layout2)
});






//// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
//   xaxis: { title: "Drinks"},
//   yaxis: { title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plot", data, layout);
