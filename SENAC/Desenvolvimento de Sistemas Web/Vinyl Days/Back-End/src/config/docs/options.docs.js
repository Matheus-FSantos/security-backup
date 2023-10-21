export default {
  "definition": {
    "openapi": "3.0.0",
    "info": {
      "title": "Vinyl Days RESTFul API",
      "version": "1.0.0",
      "description": "Backend com. NodeJS, Express, MySQL and more for the Vinyl Days project, a music album catalog website",
      "contact": {
        "name": "Matheus Ferreira Santos & Lucas Ryu Muraoka",
        "email": "matheus.fs.contato@gmail.com"
      },
      "version": "1.0.0"
    },
    "servers": [
      {
        "url": "http://localhost:3333/api",
        "description": "Vinyl Days API (to Test)"
      }
    ],
    "paths": {
      "/users": {
        "get": {
          "summary": "Users List",
          "description": "This route will search for all existing users on the system",
          "tags": [
            "Users"
          ],
          "responses": {
            "200": {
              "description": "Ok (Sucess!)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        },
                        "password": {
                          "type": "string"
                        },
                        "createdAt": {
                          "type": "string"
                        },
                        "updatedAt": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "examples": {
                    "Users List": {
                      "value": [
                        {
                          "id": "de48599e-3642-4191-bb26-ba4e8ac979b6",
                          "name": "John Doe",
                          "email": "john.doe@gmail.com",
                          "password": "John1...",
                          "createdAt": "19:59:59 17/10/2012",
                          "updatedAt": "19:59:59 17/10/2013"
                        },
                        {
                          "id": "de48599e-3642-4191-bb26-ba4e8ac979b6",
                          "name": "Jane Doe",
                          "email": "jane.doe@gmail.com",
                          "password": "Jane1...",
                          "createdAt": "19:59:59 18/10/2012",
                          "updatedAt": "19:59:59 18/10/2013"
                        },
                        {
                          "id": "d2c7344a-0edd-4225-a93d-696fdcce7da8",
                          "name": "Richard Roe",
                          "email": "richard.roe@gmail.com",
                          "password": "Richa...",
                          "createdAt": "19:59:59 18/10/2012",
                          "updatedAt": "19:59:59 18/10/2013"
                        },
                      ]
                    }
                  }
                }
              }
            },
            "404":{
              "description": "Not Found (UserNotFound Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "string"
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "UserNotFound": {
                      "value": {
                        "name": "UserNotFound",
                        "message": "The method to fetch all users was invoked but the database is empty!",
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 404
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }, /* END */
      "/users/{id}": {
        "get": {
          "summary": "Search a user",
          "description": "This route will search for all existing users on the system",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "type": "string"
              },
              "required": "true",
              "decription": "Ex.: b4087f8b-79d5-449c-b0df-5a9beaa6efea",
            }
          ],
          "responses": {
            "200": {
              "description": "Ok (Sucess!)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "email": {
                        "type": "string"
                      },
                      "password": {
                        "type": "string"
                      },
                      "createdAt": {
                        "type": "string"
                      },
                      "updatedAt": {
                        "type": "string"
                      }
                    }
                  },
                  "examples": {
                    "User": {
                      "value": {
                        "id": "de48599e-3642-4191-bb26-ba4e8ac979b6",
                        "name": "John Doe",
                        "email": "john.doe@gmail.com",
                        "password": "John1...",
                        "createdAt": "19:59:59 17/10/2012",
                        "updatedAt": "19:59:59 17/10/2013"
                      }
                    }
                  }
                }
              }
            },
            "404":{
              "description": "Not Found (UserNotFound Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "string"
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "UserNotFound": {
                      "value": {
                        "name": "UserNotFound",
                        "message": "The method to search for a user was invoked but it was not found in the database!",
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 404
                      }
                    }
                  }
                }
              }
            }
          },
        },
        "put": {
          "summary": "Find All Users",
          "description": "This route will search for all existing users on the system",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "type": "string"
              },
              "required": "true",
              "decription": "Ex.: b4087f8b-79d5-449c-b0df-5a9beaa6efea",
            },
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  },
                  "required": ["name", "email", "password"]
                },
                "examples": {
                  "User": {
                    "value": {
                      "name": "John Doe",
                      "email": "john.doe@gmail.com",
                      "password": "Jhon123#",
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "204": {
              "description": "No Content (Sucess!)",
            },
            "404":{
              "description": "Not Found (UserNotFound Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "string"
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "UserNotFound": {
                      "value": {
                        "name": "UserNotFound",
                        "message": "The method to search for a user was invoked but it was not found in the database!",
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 404
                      }
                    }
                  }
                }
              }
            },
            "422":{
              "description": "Unprocessable Entity Found (InvalidFields Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "string"
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "InvalidFields": {
                      "value": {
                        "name": "InvalidFields",
                        "message": "The method to search for a user was invoked but it was not found in the database!",
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 422
                      }
                    }
                  }
                }
              }
            },
            "409":{
              "description": "Conflict (UserAlreadyExists Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "UserAlreadyExists": {
                      "value": {
                        "name": "InvalidFields",
                        "message":[
                          "The NAME field is invalid!",
                          "The E-MAIL field is invalid!",
                          "The PASSWORD field is invalid!",
                        ],
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 409
                      }
                    }
                  }
                }
              }
            }
          },
        },
        "delete": {
          "summary": "Find All Users",
          "description": "This route will search for all existing users on the system",
          "tags": [
            "Users"
          ],
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "schema": {
                "type": "string"
              },
              "required": "true",
              "decription": "Ex.: b4087f8b-79d5-449c-b0df-5a9beaa6efea",
            }
          ],
          "responses": {
            "204": {
              "description": "No Content (Sucess!)",
            },
            "404":{
              "description": "Not Found (UserNotFound Exception)",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "messages": {
                        "type": "string"
                      },
                      "date": {
                        "type": "string"
                      },
                      "statusCode": {
                        "type": "number"
                      }
                    }
                  },
                  "examples": {
                    "UserNotFound": {
                      "value": {
                        "name": "UserNotFound",
                        "message": "The method to search for a user was invoked but it was not found in the database!",
                        "date": "10:18:46 18/10/2023",
                        "statusCode": 404
                      }
                    }
                  }
                }
              }
            }
          },
        }
      }, /* END */
    }
  },
  "apis": ["./router/routes.js"]
}