const getters = {
  //user
  token: state => state.user.token,
  name: state => state.user.name,
  avatar: state => state.user.avatar,
  roles: state => state.user.roles,
  //app
  visitedViews: state => state.app.visitedViews,
  collapsed: state => state.app.collapsed,
  //page
  actionRow: state => state.page.actionRow,
  form: state => state.page.form,
  formRules: state => state.page.formRules,
  modalVisible: state => state.page.modalVisible,
  modalType: state => state.page.modalType,
  modalForm: state => state.page.modalForm,
  modalLoading: state => state.page.modalLoading,
  ruleState: state => state.page.ruleState,
  //insourcing
  dwnbbh: state => state.insourcing.dwnbbh
}

export default getters
