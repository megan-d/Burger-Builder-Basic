import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
            }
            //register intercepts within constructor so it's there before child components are rendered
            this.reqInterceptor = axios.interceptors.request.use(req => {
                //clear any errors before setting state
                this.setState({error: null})
                return req;
            })
            //Set up global interceptor for errors. 
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <React.Fragment>
                    {/* Only show modal if this.state.error is not null */}
                    <Modal 
                        show={this.state.error}
                        // get rid of error when clicked
                        modalClosed={this.errorConfirmedHandler}>
                        {/* output error message from firebase */}
                        {this.state.error? this.state.error.message : null}
                    </Modal>
                    {/* //distribute any props might receive */}
                    <WrappedComponent {...this.props} />
                </React.Fragment>
        );
    } 
}
}

export default withErrorHandler;