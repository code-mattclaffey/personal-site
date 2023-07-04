
export const bannerComponent = async (props: any) => ({
  id: 'bannerComponent',
  props: {
    key: props.sys.id,
    title: props.fields.title,
    children: props.fields.description,
  },
});
