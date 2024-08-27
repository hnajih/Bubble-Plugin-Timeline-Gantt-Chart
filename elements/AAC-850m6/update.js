function(instance, properties, context) {

    var height = properties.bubble.height();
    var font_size = properties.bubble.font_size();
    var font_color = properties.bubble.font_color();
    var font_face = properties.bubble.font_face();
        
    var title = properties.title;
    var title_align = properties.title_alignment;
    var xaxis_type = properties.xaxis_type;
    var xaxis_position = properties.xaxis_position;
    var show_yaxis = properties.show_yaxis;
    var yaxis_position = properties.yaxis_position
    var reverse_yaxis = properties.reverse_yaxis
    var zoomable = properties.zoomable;
    var show_grid = properties.show_grid;
    var show_legend = properties.show_legend;
    var no_data_text = properties.no_data_text;
    var dark_mode = properties.dark_mode;
    var tooltip_enabled = properties.tooltip_enabled;
    var downloading_enabled = properties.downloading_enabled;
    
    var series_data_x = properties.series_data_x.get(0, properties.series_data_x.length()) || [];
    var series_data_y = properties.series_data_y.get(0, properties.series_data_y.length()) || [];
	var series_data_y1 = properties.series_data_y1.get(0, properties.series_data_y1.length()) || [];
	var series_data_x_colors = properties.series_data_x_colors.get(0, properties.series_data_x_colors.length()) || [];
            
    var style = { fontSize: font_size, fontFamily: font_face, colors: font_color }  

    var options = {
      series: [
        { data: series_data_x.map((x,i) => ({x:x, y: [series_data_y[i], series_data_y1[i]], fillColor: series_data_x_colors[i]})) }
      ],
      chart: {
        type: 'rangeBar',
        height: height,
        fontFamily: font_face,
        zoom: {
          enabled: zoomable,
        },
        toolbar: {
            tools: {
               download: downloading_enabled
            }
        }
      },
       plotOptions: {
          bar: {
            horizontal: true
          }
        },
      title: {
        text: title || "",
        align: title_align,
      },
      grid: {
          show: show_grid
      },
      xaxis: {
        type: xaxis_type,
        position: xaxis_position,
        labels: { style: style }
      },
      yaxis: {
        show: show_yaxis,
        opposite: yaxis_position === 'right',
      	reversed: reverse_yaxis,
        labels: { style: style } 
      },
      legend: {
        show: show_legend
      },
      noData: {
      	text: no_data_text
      },
      theme: {
        mode: dark_mode ? 'dark': 'light'
      },
      tooltip: {
      	enabled: tooltip_enabled
      }
    };

    instance.data.container = document.createElement("div");
    instance.canvas.append(instance.data.container);

    var apexChart = new ApexCharts(instance.data.container, options);
    apexChart.render();

}