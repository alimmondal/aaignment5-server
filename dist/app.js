"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const http_status_1 = __importDefault(require("http-status"));
const routes_1 = __importDefault(require("./app/routes"));
app.use((0, cors_1.default)());
//parse request
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// custom routes
app.use('/', routes_1.default);
// default routes for testing
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('Hello World!');
}));
//global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
// Not found routes
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'not found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'Api not found',
            },
        ],
    });
    next();
});
// app.listen(5000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
exports.default = app;
