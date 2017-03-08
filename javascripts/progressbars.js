$(document).ready(function() {
  // var ProgressBar = requir/e('progressbar.js');
    var lineWebDesign = new ProgressBar.Line('#webDesignProgress', {
      color: '#9f449b',
      trailColor: '#f0f0f0',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        value: '0',
          className: 'skill-counter',
          style: {
              color: '#777777',
              position: 'absolute',
              top: '-3rem',
              right: '0',
              margin: 0,
              padding: 0,
          },
      },
      autoStyleContainer: false,
      step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + '%');
      }
    });

    var lineGraphicDesign = new ProgressBar.Line('#graphicDesignProgress', {
      color: '#9f449b',
      trailColor: '#f0f0f0',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        value: '0',
          className: 'skill-counter',
          style: {
              color: '#777777',
              position: 'absolute',
              top: '-3rem',
              right: '0',
              margin: 0,
              padding: 0,
          },
      },
      autoStyleContainer: false,
      step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + '%');
      }
    });

    var lineHtmlCss = new ProgressBar.Line('#htmlCssProgress', {
      color: '#9f449b',
      trailColor: '#f0f0f0',
      svgStyle: {width: '100%', height: '100%'},
      text: {
        value: '0',
          className: 'skill-counter',
          style: {
              color: '#777777',
              position: 'absolute',
              top: '-3rem',
              right: '0',
              margin: 0,
              padding: 0,
          },
      },
      autoStyleContainer: false,
      step: function(state, bar) {
        bar.setText(Math.round(bar.value() * 100) + '%');
      }
    });

    var lineUiUx = new ProgressBar.Line('#uiUxProgress', {
        color: '#9f449b',
        trailColor: '#f0f0f0',
        svgStyle: {width: '100%', height: '100%'},
        text: {
          value: '0',
            className: 'skill-counter',
            style: {
                color: '#777777',
                position: 'absolute',
                top: '-3rem',
                right: '0',
                margin: 0,
                padding: 0,
            },
        },
        autoStyleContainer: false,
        step: function(state, bar) {
          bar.setText(Math.round(bar.value() * 100) + '%');
        }
    });

    lineWebDesign.animate(0.7);
    lineGraphicDesign.animate(0.9);
    lineHtmlCss.animate(.56);
    lineUiUx.animate(0.85);

});
