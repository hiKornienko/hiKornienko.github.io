$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(".rank__slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: false,
    });

    $('.token__index-progress').circleProgress({
        max: 100,
        value: 82,
        textFormat: 'percent',
    });
});

// graph
/* Add a basic data series with six labels and values */

new Chartist.Line('#my-chart', {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 10],
    series: [
        [0.5, 0.9, 0.7, 0.8, 0.5, 0.3, 0.5, 0.4, 0.2]
    ],
    // Y-Axis specific configuration
    axisY: {
        type: Chartist.FixedScaleAxis,
        ticks: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,],
        low: 0
    },
}, {
    low: 0,
    showArea: true
});


new Chartist.Line('#dynamic-graphic', {
    series: [[
        {x: 1, y: 0.1},
        {x: 2, y: 0.5},
        {x: 3, y: 0.25},
        {x: 5, y: 0.125},
        {x: 6, y: 0.625},
        {x: 7, y: 0.625},
        {x: 8, y: 0.625},
        {x: 9, y: 0.625},
        {x: 10, y: 1}
    ]]
}, {
    axisX: {
        type: Chartist.AutoScaleAxis,
        onlyInteger: true
    },
    axisY: {
        type: Chartist.FixedScaleAxis,
        ticks: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2],
        low: 0
    },
    // lineSmooth: Chartist.Interpolation.step(),
    showPoint: true,
    showArea: true
});
