import 'plugins/number_vis/number_vis.less';
import 'plugins/number_vis/number_vis_controller';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/TemplateVisType';
import VisSchemasProvider from 'ui/Vis/Schemas';
import numberVisTemplate from 'plugins/number_vis/number_vis.html';
import numberVisParamsTemplate from 'plugins/number_vis/number_vis_params.html';
// we need to load the css ourselves

// we also need to load the controller and used by the template

// register the provider with the visTypes registry
require('ui/registry/vis_types').register(MetricVisProvider);

function MetricVisProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'number',
    title: 'Number',
    description: 'One big number for all of your one big number needs. a planned value for the team.',
    icon: 'fa-calculator',
    template: numberVisTemplate,
    params: {
      defaults: {
        handleNoResults: true,
        fontSize: 60
      },
      editor: numberVisParamsTemplate
    },
    schemas: new Schemas([
    ])
  });
}

// export the provider so that the visType can be required with Private()
export default MetricVisProvider;
