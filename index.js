export default function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: [
        'plugins/number_vis/number_vis'
      ]
    }

  });

};
