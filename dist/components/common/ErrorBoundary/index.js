import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '@Components/common/Icon';
import { Component } from 'react';
class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null,
    };
    constructor(props) {
        super(props);
        if (this.props.showError === false) {
            this.state.error = null;
            this.state.errorInfo = null;
        }
    }
    componentDidCatch(error, info) {
        this.setState({ error, errorInfo: info });
    }
    render() {
        if (this.state.errorInfo) {
            const [fileName, errorLocation] = this.state.errorInfo.componentStack
                .split('\n ')[1]
                .trim()
                .split(' (');
            return (_jsxs("div", { className: " naxatw-flex naxatw-w-full naxatw-flex-col naxatw-items-center naxatw-justify-center naxatw-gap-1 naxatw-bg-pink-200 naxatw-p-4", children: [_jsxs("div", { className: "title  naxatw-flex naxatw-flex-col naxatw-items-center naxatw-justify-center", children: [_jsx(Icon, { name: "running_with_errors", className: "naxatw-text-4xl naxatw-text-red-600" }), _jsxs("p", { className: "naxatw-text-lg naxatw-font-bold naxatw-text-gray-800", children: [' ', "An Error Occurred !"] })] }), _jsx("a", { href: errorLocation, target: "_blank", rel: "noopener noreferrer", className: "naxatw-text-sm naxatw-text-red-600 naxatw-underline", children: fileName })] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
