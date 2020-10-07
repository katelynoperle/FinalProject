

// graph 1 starts here

var initGraph1= function (petownership)
{
    var screen= {width: 700, height: 400}
    
    var margins= {left:70, right:5, top:20, bottom: 20}
    
    var graph= 
        {
            width:screen.width-margins. left-margins.right,
            height:screen.height/1.2 - margins.top-margins.bottom
        }
    
    console.log(graph)
    
    d3.select("#graph1")
        .attr("width", screen.width)
        .attr("height",screen.height)
            
  
    var target = d3.select("#graph1")
                .append ("g")
                .attr("transform", "translate (" + margins.left + ", "+ margins.top +")");
    
    var xScale= d3.scaleBand()
        .domain(["Vermont","New Mexico","South Dakota","Oregon","Maine","Washington","Arkansas","West Virginia","Idaho","Wyoming"])
        .range([0, graph.width])
        .paddingInner(.25)
    
    var yScale= d3.scaleLinear()
        .domain([0,80])
        .range([graph.height,0])
    
    
    drawAxis1(graph,margins,xScale,yScale);
    var g0 = target.append("g");
    drawBars1(petownership,g0,graph,xScale,yScale);
    drawLabels1(graph,margins,target);

}


var drawBars1= function(petownership,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(petownership)
        .enter()
        .append("rect")
        .attr("x", function (state)
{
                return xScale(state.state);
})
        .attr("y", function (state)
{ 
        
                  return yScale (state.petownership_percent);
})
    
        .attr("width",xScale.bandwidth)
        .attr("height", function(state)
{ 
               return graphDim.height-yScale(state.petownership_percent)
})
        .attr("fill", "black") .on("mouseenter", function(petownership)
{
                var xPos= d3.event.pageX;
                var yPos=
                d3.event.pageY;
            
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("top",yPos+"px")
            .style("left",xPos+"px")
            .text(petownership.petownership_percent) 
})
}


 /*  .selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      */

        

var drawAxis1 = function(graph,margins,xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);
   var yAxis= d3.axisLeft(yScale);
    
    var axes= d3.select("#graph1")
        .append("g")
        
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")") 
        
        .call(xAxis)
        
 
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top)+")") 
       .call(yAxis)

}

var drawLabels1 = function(graph,margins)
{
        var labels = d3.select("#graph1")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("States with the highest Pet Ownership Rates")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
     
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("% of households")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}

var succFCN1 = function(petownership)
{
    initGraph1(petownership);
}


var failFCN1 = function(error)
{
    console.log("error",error)
}

var petownershipPromise= d3.csv("../csv/petownershipData.csv")

petownershipPromise.then(succFCN1,failFCN1);





//graph 2 starts here


var initGraph2= function (ownership)
{
    var screen= {width: 700, height: 400}
    
    var margins= {left:70, right:5, top:20, bottom: 20}
    
    var graph= 
        {
            width:screen.width-margins. left-margins.right,
            height:screen.height/1.2 - margins.top-margins.bottom
        }
    
    console.log(graph)
    
    d3.select("#graph2")
        .attr("width", screen.width)
        .attr("height",screen.height)
            
  
    var target = d3.select("#graph2")
                .append ("g")
                .attr("transform", "translate (" + margins.left + ", "+ margins.top +")");
    
    var xScale= d3.scaleBand()
        .domain(["Rhode Island","Minnesota","California","Maryland","Illinois","Nebraska","Utah","New Jersey","New York","Massachusetts"])
        .range([0, graph.width])
        .paddingInner(.25)
    
    var yScale= d3.scaleLinear()
        .domain([0,80])
        .range([graph.height,0])
    
    
    drawAxis2(graph,margins,xScale,yScale);
    var g0 = target.append("g");
    drawBars2(ownership,g0,graph,xScale,yScale);
    drawLabels2(graph,margins,target);

}


var drawBars2= function(ownership,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(ownership)
        .enter()
        .append("rect")
        .attr("x", function (state)
{
                return xScale(state.state);
})
        .attr("y", function (state)
{ 
        
                  return yScale (state.ownership_percent);
})
    
        .attr("width",xScale.bandwidth)
        .attr("height", function(state)
{ 
               return graphDim.height-yScale(state.ownership_percent)
})
        .attr("fill", "black") .on("mouseenter", function(ownership)
{
                var xPos= d3.event.pageX;
                var yPos= d3.event.pageY;
            
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("top",yPos+"px")
            .style("left",xPos+"px")
            .text(ownership.ownership_percent) 
})
}
   /*  .selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      */

        

var drawAxis2 = function(graph,margins,xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);
   var yAxis= d3.axisLeft(yScale);
    
    var axes= d3.select("#graph2")
        .append("g")
        
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")") 
        
        .call(xAxis)
        
 
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top)+")") 
       .call(yAxis)

}

var drawLabels2 = function(graph,margins)
{
        var labels = d3.select("#graph2")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("States with the lowest Pet Ownership Rates")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
     
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("% of households")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}

var succFCN2 = function(ownership)
{
    initGraph2(ownership);
}


var failFCN2 = function(error)
{
    console.log("error",error)
}

var ownershipPromise= d3.csv("../csv/ownershipData.csv")

ownershipPromise.then(succFCN2,failFCN2);



//graph 3 starts here

var initGraph3= function (mostincidents)
{
    var screen= {width: 700, height: 400}
    
    var margins= {left:70, right:5, top:20, bottom: 20}
    
    var graph= 
        {
            width:screen.width-margins. left-margins.right,
            height:screen.height/1.2 - margins.top-margins.bottom
        }
    
    console.log(graph)
    
    d3.select("#graph3")
        .attr("width", screen.width)
        .attr("height",screen.height)
            
  
    var target = d3.select("#graph3")
                .append ("g")
                .attr("transform", "translate (" + margins.left + ", "+ margins.top +")");
    
    var xScale= d3.scaleBand()
        .domain(["Kentucky","Vermont","Illinois","West Virginia","Colorado"])
        .range([0, graph.width])
        .paddingInner(.25)
    
    var yScale= d3.scaleLinear()
        .domain([0,1700])
        .range([graph.height,0])
    
    
    drawAxis3(graph,margins,xScale,yScale);
    var g0 = target.append("g");
    drawBars3(mostincidents,g0,graph,xScale,yScale);
    drawLabels3(graph,margins,target);

}


var drawBars3= function(mostincidents,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(mostincidents)
        .enter()
        .append("rect")
        .attr("x", function (state)
{
                return xScale(state.state);
})
        .attr("y", function (state)
{ 
        
                  return yScale (state.mostincidents_number);
})
    
        .attr("width",xScale.bandwidth)
        .attr("height", function(state)
{ 
               return graphDim.height-yScale(state.mostincidents_number)
})
        .attr("fill", "black") .on("mouseenter", function(mostincidents)
{
                var xPos= d3.event.pageX;
                var yPos= d3.event.pageY;
            
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("top",yPos+"px")
            .style("left",xPos+"px")
            .text(mostincidents.mostincidents_number) 
})
}
   /*  .selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      */

        

var drawAxis3 = function(graph,margins,xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);
   var yAxis= d3.axisLeft(yScale);
    
    var axes= d3.select("#graph3")
        .append("g")
        
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")") 
        
        .call(xAxis)
        
 
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top)+")") 
       .call(yAxis)

}

var drawLabels3 = function(graph,margins)
{
        var labels = d3.select("#graph3")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text(" Animal Cruelty Incidents Per Year")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
     
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("# of Incidents")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}

var succFCN3 = function(mostincidents)
{
    initGraph3(mostincidents);
}


var failFCN3 = function(error)
{
    console.log("error",error)
}

var mostincidentsPromise= d3.csv("../csv/mostincidents.csv")

mostincidentsPromise.then(succFCN3,failFCN3);



//graph 5 starts here


var initGraph5= function (incident)
{
    var screen= {width: 700, height: 400}
    
    var margins= {left:70, right:5, top:20, bottom: 20}
    
    var graph= 
        {
            width:screen.width-margins. left-margins.right,
            height:screen.height/1.2 - margins.top-margins.bottom
        }
    
    console.log(graph)
    
    d3.select("#graph5")
        .attr("width", screen.width)
        .attr("height",screen.height)
            
  
    var target = d3.select("#graph5")
                .append ("g")
                .attr("transform", "translate (" + margins.left + ", "+ margins.top +")");
    
    var xScale= d3.scaleBand()
        .domain(["Massachusetts","Missouri","Maine","West Virginia","Illinois"])
        .range([0, graph.width])
        .paddingInner(.25)
    
    var yScale= d3.scaleLinear()
        .domain([0,50])
        .range([graph.height,0])
    
    
    drawAxis5(graph,margins,xScale,yScale);
    var g0 = target.append("g");
    drawBars5(incident,g0,graph,xScale,yScale);
    drawLabels5(graph,margins,target);

}


var drawBars5= function(incident,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(incident)
        .enter()
        .append("rect")
        .attr("x", function (state)
{
                return xScale(state.state);
})
        .attr("y", function (state)
{ 
        
                  return yScale (state.incident_number);
})
    
        .attr("width",xScale.bandwidth)
        .attr("height", function(state)
{ 
               return graphDim.height-yScale(state.incident_number)
})
       
}
     .on("mouseenter",function(state)                      
    {
    var xPos = d3.event.pageX;
    var yPos = d3.event.pageY;
    
    d3.select("#tooltip")
    .classed("hidden",false)
    .style("top",yPos+"px")
    .style("left",xPos+"px")
}) 

    
var drawAxis5 = function(graph,margins,xScale,yScale)
{
   var xAxis= d3.axisBottom(xScale);
   var yAxis= d3.axisLeft(yScale);
    
    var axes= d3.select("#graph5")
        .append("g")
        
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top+graph.height)+")") 
        
        .call(xAxis)
        
 
    axes.append("g")
        .attr("transform", "translate("+margins.left+","+(margins.top)+")") 
       .call(yAxis)

}

var drawLabels5 = function(graph,margins)
{
        var labels = d3.select("#graph5")
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("States with the fewest Animal cruelty Incidents Per Year")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
     
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("# of Incidents")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}

var succFCN5 = function(incident)
{
    initGraph5(incident);
}


var failFCN5 = function(error)
{
    console.log("error",error)
}

var incidentPromise= d3.csv("../csv/incident.csv")

incidentPromise.then(succFCN5,failFCN5);


