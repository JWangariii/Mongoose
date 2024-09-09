Static Methods are associated with the class itself and don't need an instance to be used.
Query Methods are instance methods that check and return information about the state of an object without modifying it.

## important midddleware

save, validate, remove

## mongoose

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.JS. It is responsible for:

Managing data relationships.
Providing schema validation.
Implementing the translation between code objects and the representation of those objects in MongoDB.

## Terminologies

Collections: Collections in Mongo are the equivalent of tables in relational databases. They can hold multiple JSON documents.
Documents: Documents are the equivalent of records or data rows in SQL. While an SQL row can reference data in other tables, Mongo documents usually combine them in one document.
Fields: Fields or attributes that are similar to columns in an SQL table.
Schema: While Mongo is schema-less, SQL defines a schema via the table definition. A Mongoose ‘schema’ is a document data structure (or a shape of the document) that is enforced via the application layer.
Models: Models are higher-order constructors that take a schema and create an instance of a document equivalent to records in a relational database.
References: References are referred from one document to another using the value of the referenced (parent) document.

## model vs schema

A Mongoose model is a wrapper on the Mongoose schema. A Mongoose schema defines the structure of the document, default values, validators, etc... whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

## Middleware

set of functions that run at specific stages of a pipeline:
Aggregate
Document
Model
Query
