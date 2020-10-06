

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

var drawMap= function(mapData,target,pathGen,projection, border, field, label, color, strokeborder)
{
    
      var color2= d3.scaleQuantize()
    .range(['#ffb6c1', '#db6fbb', '#b300b3'])
    .domain([.033, .268]);  
   

    target.selectAll("path")
    .data(mapData.features)
    .enter()
    .append("path")
    .attr("d",pathGen)
    .style("fill", function(d)
           {  
        if(d.properties.data)
        {
             var value= d.properties.data[field];
           return color(value); 
        }
        else
        {
            return "#ccc";
        }
    
    }
          )
         .style("stroke-width", 3) 
    .style("stroke", function(d)
          {
       if(d.properties.data)
        {
            
             var value= d.properties.data[border];
           return strokeborder(value); 
            
        }
        else
        {
            return "#ccc";
        }
    })
  
    
 .on("mouseenter" ,function(mapData)
      {
        
      var xPos = d3.event.pageX;
      var yPos = d3.event.pageY;
      
        d3.select("#tooltip")
        .classed("hidden",false)
        .style("top",yPos+"px")
        .style("left",xPos+"px")
        
       if (label!="")
           {
               d3.select("#mapData")
        .text(mapData.properties.data[field]);
           }
           d3.select("#geoData")
            .text(mapData.properties.data[border]);
        
        d3.select("#mapDatalabel")
        .text(label);
        
      })//tool tip off
    .on("mouseleave",function()
    {
        d3.select("#tooltip")    
        .classed("hidden",true);
    })

}


var makeTranslateString=function(x,y)
{
    return "translate("+x+","+y+")";
}

var initGraph= function(stateData, mapData)
{
    var screen = {width:1000,height:550}
    
    var margins =
        {left:30,right:20,top:20,bottom:30}


    
    
    var createLabels = function(screen,margins,
graph,target)
{
        var labels = d3.select(target)
        .append("g")
        .classed("labels",true)
        
    labels.append("text")
        .text("Map of the United States")
        .classed("title",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",margins.top)
}
 
 
 
var joinData= function(mapData,stateData)
{
    var shapes= {};
    mapData.features.forEach(function(feature)
                            {
        shapes[feature.properties.NAME]=feature;
    })
    stateData.forEach(function(state)
                     { if(shapes[state.states])
                         {
        
        shapes[state.states].properties.data=state;
    }
})
    console.log(shapes)
}
var graph = 
        {
            width:screen.width-margins.left-margins.right,
            height:screen.height - margins.top-margins.bottom
        }

joinData(mapData,stateData)
    d3.select("svg")
.attr("width", screen.width)
.attr("height", screen.height)

var target= d3.select("svg")
.append("g")
.attr("id", "#graph")
.attr("transform","translate("+margins.left+ ","+ margins.top+")");

var color1= d3.scaleQuantize()
    .range(["rgb(255,255,255)","rgb(230,247,255)","rgb(179,231,255)", "rgb(128,215,255)", "rgb(77,198,255)","rgb(26,182,255)","rgb(0,157,230)", "rgb(0,122,179)", "rgb(0,87,128)","rgb(0,52,77)", "rgb(0,0,0)"])
    .domain([.0402,.4443]);
    
 var color2= d3.scaleQuantize()
   .range(['#ffb6c1', '#db6fbb', '#b300b3'])
    .domain([.033, .268]);  
    
 var color3= d3.scaleQuantize()
    .range(["rgb(0,0,0)"])
    .domain([.033,.268]);
   
    
var projection= d3.geoAlbersUsa()


var pathGen= d3.geoPath()
.projection(projection)

        drawMap(mapData, target, pathGen, projection, "petownership_percentage","dogownership_percentage","catownership_percentage", color1, color2 );
    
    drawMap(mapData, target, pathGen, projection, "petownership_percentage","dogownership_percentage","catownership_percentage", color1, color2);
    
      drawMap(mapData, target, pathGen, projection,"petownership_percentage","dogownership_percentage","catownership_percentage", color2, color3);

    drawMapbutton(mapData,target,pathGen,projection,color1,color2,color3)
}





//--------buttons----------
		var drawMapbutton = function (mapData,target,pathGen,projection,color1,color2,color3)
		{
			d3.select("#banner1")
			.on("click", function()
			   {
                console.log("hello")
				d3.selectAll("path")
				.remove()
			drawMap(mapData, target, pathGen, projection, "petownership_percentage","dogownership_percentage","catownership_percentage", color1, color2);
				
			})
        
		{
			d3.select("#banner2")
			.on("click", function()
			   {
                console.log("hi")
                d3.selectAll("path")
				.remove()
                
			drawMap(mapData, target, pathGen, projection, "petownership_percentage","dogownership_percentage","catownership_percentage", color1,color2);
				
			})
            d3.select("#banner3")
			.on("click", function()
			   {
                console.log("howdy")
                d3.selectAll("path")
				.remove()
                
			drawMap(mapData, target, pathGen, projection, "petownership_percentage","dogownership_percentage","catownership_percentage", color2, color3);
				
			})
        }}
				
var successFCN = function(states)
{
    console.log("states", states);
    initGraph(states[0], states[1]);
   
    
    
}
var failureFCN= function(error)
{
    console.log("error", error);
}
var statePromise= d3.csv("stateownership.csv")
var geoPromise= d3.json("USstates.json")
var promises= [statePromise, geoPromise];
Promise.all(promises)
.then(successFCN, failureFCN);
