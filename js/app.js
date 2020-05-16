

function buildPlots(sample_id){
    d3.json("samples.json").then((data)=> {
        console.log("data:", data);

        //patient data from here 
        let samples = data.samples.filter((data) => data.id === sample_id);
        console.log("Specified Patient Data:", samples); 
        let patients_10 = data.samples[0].samples.slice(0, 10).reverse()
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
        y: samples,
        text: otu_labels
        }
        var datas = [trace2];
        var layout2 = {
            height: 600,
            width: 1000
        }
        Plotly.newPlot("bubble", datas, layout2)
    });
}


d3.json("samples.json").then((data)=> {
    let names = data.filter(names);
    let drop_down = d3.select("#selDataset");
    names.forEach(id => drop_down.append("option").text(id))
    //metadata
    var MetaData = data.metadata[0]
    Object.entries(MetaData).forEach(([key, value]) => {
        d3.select("#sample-metadata").append("ul").text(`${key} :  ${value}`)
    });
});