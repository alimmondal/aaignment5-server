"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const comment_routes_1 = require("../modules/comment/comment.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: book_route_1.BookRoutes,
    },
    {
        path: '/comment',
        route: comment_routes_1.CommentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
