

// graph 1 starts here


var overdosePromise= d3.csv("petownershipData.csv")



var initGraph= function (ownershipPercent)
{
    var screen= {width: 800, height: 250}
    
    var margins= {left:80, right:5, top:20, bottom: 20}
    
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
        .paddingInner(.05)
    
    var yScale= d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])
    

    drawAxis(graph,margins,xScale,yScale);
    
    var g0 = target.append("g");
    drawBars(ownershipPercent,g0,graph,xScale,yScale);
    var g1 = target.append("g");
    drawBars(ownershipPercent,g1,graph,xScale,yScale);
    
    drawLabels(graph,margins,target);

}


var drawBars= function(ownershipPercent,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(ownershipPercent)
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
        .attr("height", function(year)
{ 
               return graphDim.height-yScale(year.petownership_percent)
})
        .attr("fill", "black") .on("mouseenter", function(ownershipPercent)
{
                var xPos= d3.event.pageX;
                var yPos=
                d3.event.pageY;
            
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("top",yPos+"px")
            .style("left",xPos+"px")
            .text(ownershipPercent.petownership_percent)
})
}
        

var drawAxis = function(graph,margins,xScale,yScale)
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

var drawLabels = function(graph,margins)
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



//graph 2 starts here


var ownershipPromise= d3.csv("ownershipData.csv")



var initGraph2= function (ownership)
{
    var screen= {width: 800, height: 250}
    
    var margins= {right:80, left:5, top:20, bottom: 20}
    
    var graph= 
{
            width:screen.width-margins. right-margins.left,
            height:screen.height/1.2 - margins.top-margins.bottom
        
}
    
    console.log(graph)
    
    d3.select("#graph2")
        .attr("width", screen.width)
        .attr("height",screen.height)
            .
    
    var target = d3.select("#graph2")
                .append ("g")
                .attr("transform", "translate (" + margins.right + ", "+ margins.top +")");
    
    var xScale= d3.scaleBand()
        .domain(["Rhode Island","Minnesota","California","Maryland","Illinois","Nebraska","Utah","New Jersey","New York","Massachusetts"])
        .range([0, graph.width])
        .paddingInner(.05)
    
    var yScale= d3.scaleLinear()
        .domain([0,100])
        .range([graph.height,0])
    
  

    drawAxis(graph,margins,xScale,yScale);
    
    var g0 = target.append("g");
    drawBars(ownership,g0,graph,xScale,yScale);
    var g1 = target.append("g");
    drawBars(ownership,g1,graph,xScale,yScale);
    
    drawLabels(graph,margins, target);

}

var drawBars= function(ownership,target,graphDim,xScale,yScale)
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
               return graphDim.height-yScale(year.ownership_percent)
})
        .attr("fill", "red") .on("mouseenter", function(ownership)
{
                var xPos= d3.event.pageX;
                var yPos=
                d3.event.pageY;
            
        d3.select("#tooltip")
            .classed("hidden", false)
            .style("top",yPos+"px")
            .style("left",xPos+"px")
            .text(ownership.ownership_percent)
})
}

var drawAxis = function(graph,margins,xScale,yScale)
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
var drawLabels = function(graph,margins)
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
        .text("# of households")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}



// graph 3 starts here

