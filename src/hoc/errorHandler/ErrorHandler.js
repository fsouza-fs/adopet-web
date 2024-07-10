import React, { Component } from 'react';

import Modal from '../../components/UI/modal/Modal';
import styles from './styles';

const withErrorHandler = (WrappedComponent, axios) => {
  return class ErrorHandler extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler() {
      this.setState({ error: null });
    }

    render() {
      let modalClass = styles.modalHide;
      if (this.state.error) {
        modalClass = styles.modalShow;
      }

      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClass={modalClass}
            modalClosed={() => this.errorConfirmedHandler()}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
