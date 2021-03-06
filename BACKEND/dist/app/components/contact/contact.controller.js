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
const contact_repository_1 = __importDefault(require("./contact.repository"));
function addContact(contact) {
    contact.email = contact.email.toLowerCase();
    contact.createdAt = new Date();
    return contact_repository_1.default.addContact(contact);
}
function getContacts() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield contact_repository_1.default.getContacts()).reverse();
    });
}
function deleteContact(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return contact_repository_1.default.deleteContact(_id);
    });
}
exports.default = { addContact, getContacts, deleteContact };
