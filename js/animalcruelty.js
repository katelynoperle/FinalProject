
var initGraph= function (abusePercentage)
{
    var screen= {width: 650, height: 500}
    
    var margins= {left:80, right:15, top:60, bottom: 50}
    
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
        .domain(["Neglect","Gunshot","Asphyxiation","Poison","Phyiscal Abuse","Torture","Other"])
        .range([0, graph.width])
        .paddingInner(.05)
    
    var yScale= d3.scaleLinear()
        .domain([0,50])
        .range([graph.height,0])
    
  
    drawAxis(graph,margins,xScale,yScale);
    
    var g0 = target.append("g");
    drawBars(abusePercentage,g0,graph,xScale,yScale);
    var g1 = target.append("g");
    drawBars(abusePercentage,g1,graph,xScale,yScale);
    
    drawLabels(graph,margins, target);
    //drawLegend(graph,margins);

}

var drawBars= function(abusePercentage,target,graphDim,xScale,yScale)
{
    target.selectAll("rect")
        .data(abusePercentage)
        .enter()
        .append("rect")
        .attr("x", function (type)
              {
                return xScale(type.type);
    })
        .attr("y", function (type)
              { 
        
                  return yScale (type.percentage);
    })
    
        .attr("width",xScale.bandwidth)
        .attr("height", function(type)
              { 
               return graphDim.height-yScale(type.percentage)
              })
        .attr("fill", "green")
    
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
        .text("Reported Incidents of Animal Abuse")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
     
    labels.append("g")
        .attr("transform","translate(20,"+ 
              (margins.top+(graph.height/2))+")")
        .append("text")
        .text("% of Cases")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(270)")
}

var abusePromise= d3.csv("../csv/types.csv")

var succFCN = function(abuse)
{
    console.log("abuse",abuse);
    initGraph(abuse);
}


var failFCN = function(error)
{
    console.log("error",error)
}
abusePromise.then(succFCN,failFCN);