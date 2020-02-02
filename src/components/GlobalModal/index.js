import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as modalActions from "../../store/actions/modal.action";

class ModalComponent extends Component {
  render() {
    const { title, classes, open, modalActions, component } = this.props;
    const { hideModal } = modalActions;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.modalContainer}>
          <div className={classes.modalHeader}>
            <h2>{title}</h2>
            <Icon onClick={hideModal} className={classes.closeIcon}>close</Icon>
          </div>
          <div className={classes.modalBottom}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  open: state.modal.showModal,
  title: state.modal.title,
  component: state.modal.component
});

const mapDispatchToProps = dispatch => ({
  modalActions: bindActionCreators(modalActions, dispatch)
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withStyles(styles), withConnect)(ModalComponent);