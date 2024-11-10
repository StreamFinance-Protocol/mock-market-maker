/// <reference types="long" />
import * as _253 from "./api/http";
import * as _254 from "./protobuf/descriptor";
import * as _255 from "./protobuf/any";
import * as _256 from "./protobuf/timestamp";
import * as _257 from "./protobuf/duration";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _253.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string | undefined;
                    get?: string | undefined;
                    put?: string | undefined;
                    post?: string | undefined;
                    delete?: string | undefined;
                    patch?: string | undefined;
                    custom?: {
                        kind?: string | undefined;
                        path?: string | undefined;
                    } | undefined;
                    body?: string | undefined;
                    responseBody?: string | undefined;
                    additionalBindings?: any[] | undefined;
                }[] | undefined;
                fullyDecodeReservedExpansion?: boolean | undefined;
            }): _253.Http;
        };
        HttpRule: {
            encode(message: _253.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.HttpRule;
            fromPartial(object: {
                selector?: string | undefined;
                get?: string | undefined;
                put?: string | undefined;
                post?: string | undefined;
                delete?: string | undefined;
                patch?: string | undefined;
                custom?: {
                    kind?: string | undefined;
                    path?: string | undefined;
                } | undefined;
                body?: string | undefined;
                responseBody?: string | undefined;
                additionalBindings?: any[] | undefined;
            }): _253.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _253.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _253.CustomHttpPattern;
            fromPartial(object: {
                kind?: string | undefined;
                path?: string | undefined;
            }): _253.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _257.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _257.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            }): _257.Duration;
        };
        Timestamp: {
            encode(message: _256.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _256.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long").Long | undefined;
                nanos?: number | undefined;
            }): _256.Timestamp;
        };
        Any: {
            encode(message: _255.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _255.Any;
            fromPartial(object: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }): _255.Any;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _254.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _254.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _254.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _254.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _254.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _254.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _254.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _254.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _254.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _254.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _254.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _254.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _254.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _254.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _254.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _254.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _254.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _254.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _254.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _254.FieldOptions_CType;
        FieldOptions_JSType: typeof _254.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _254.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _254.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _254.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _254.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string | undefined;
                    package?: string | undefined;
                    dependency?: string[] | undefined;
                    publicDependency?: number[] | undefined;
                    weakDependency?: number[] | undefined;
                    messageType?: {
                        name?: string | undefined;
                        field?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            label?: _254.FieldDescriptorProto_Label | undefined;
                            type?: _254.FieldDescriptorProto_Type | undefined;
                            typeName?: string | undefined;
                            extendee?: string | undefined;
                            defaultValue?: string | undefined;
                            oneofIndex?: number | undefined;
                            jsonName?: string | undefined;
                            options?: {
                                ctype?: _254.FieldOptions_CType | undefined;
                                packed?: boolean | undefined;
                                jstype?: _254.FieldOptions_JSType | undefined;
                                lazy?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                weak?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        extension?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            label?: _254.FieldDescriptorProto_Label | undefined;
                            type?: _254.FieldDescriptorProto_Type | undefined;
                            typeName?: string | undefined;
                            extendee?: string | undefined;
                            defaultValue?: string | undefined;
                            oneofIndex?: number | undefined;
                            jsonName?: string | undefined;
                            options?: {
                                ctype?: _254.FieldOptions_CType | undefined;
                                packed?: boolean | undefined;
                                jstype?: _254.FieldOptions_JSType | undefined;
                                lazy?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                weak?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        nestedType?: any[] | undefined;
                        enumType?: {
                            name?: string | undefined;
                            value?: {
                                name?: string | undefined;
                                number?: number | undefined;
                                options?: {
                                    deprecated?: boolean | undefined;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string | undefined;
                                            isExtension?: boolean | undefined;
                                        }[] | undefined;
                                        identifierValue?: string | undefined;
                                        positiveIntValue?: string | number | import("long").Long | undefined;
                                        negativeIntValue?: string | number | import("long").Long | undefined;
                                        doubleValue?: number | undefined;
                                        stringValue?: Uint8Array | undefined;
                                        aggregateValue?: string | undefined;
                                    }[] | undefined;
                                } | undefined;
                            }[] | undefined;
                            options?: {
                                allowAlias?: boolean | undefined;
                                deprecated?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                            reservedRange?: {
                                start?: number | undefined;
                                end?: number | undefined;
                            }[] | undefined;
                            reservedName?: string[] | undefined;
                        }[] | undefined;
                        extensionRange?: {
                            start?: number | undefined;
                            end?: number | undefined;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        oneofDecl?: {
                            name?: string | undefined;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        options?: {
                            messageSetWireFormat?: boolean | undefined;
                            noStandardDescriptorAccessor?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            mapEntry?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        reservedRange?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        }[] | undefined;
                        reservedName?: string[] | undefined;
                    }[] | undefined;
                    enumType?: {
                        name?: string | undefined;
                        value?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            options?: {
                                deprecated?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        options?: {
                            allowAlias?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        reservedRange?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        }[] | undefined;
                        reservedName?: string[] | undefined;
                    }[] | undefined;
                    service?: {
                        name?: string | undefined;
                        method?: {
                            name?: string | undefined;
                            inputType?: string | undefined;
                            outputType?: string | undefined;
                            options?: {
                                deprecated?: boolean | undefined;
                                idempotencyLevel?: _254.MethodOptions_IdempotencyLevel | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                            clientStreaming?: boolean | undefined;
                            serverStreaming?: boolean | undefined;
                        }[] | undefined;
                        options?: {
                            deprecated?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    extension?: {
                        name?: string | undefined;
                        number?: number | undefined;
                        label?: _254.FieldDescriptorProto_Label | undefined;
                        type?: _254.FieldDescriptorProto_Type | undefined;
                        typeName?: string | undefined;
                        extendee?: string | undefined;
                        defaultValue?: string | undefined;
                        oneofIndex?: number | undefined;
                        jsonName?: string | undefined;
                        options?: {
                            ctype?: _254.FieldOptions_CType | undefined;
                            packed?: boolean | undefined;
                            jstype?: _254.FieldOptions_JSType | undefined;
                            lazy?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            weak?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    options?: {
                        javaPackage?: string | undefined;
                        javaOuterClassname?: string | undefined;
                        javaMultipleFiles?: boolean | undefined;
                        javaGenerateEqualsAndHash?: boolean | undefined;
                        javaStringCheckUtf8?: boolean | undefined;
                        optimizeFor?: _254.FileOptions_OptimizeMode | undefined;
                        goPackage?: string | undefined;
                        ccGenericServices?: boolean | undefined;
                        javaGenericServices?: boolean | undefined;
                        pyGenericServices?: boolean | undefined;
                        phpGenericServices?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        ccEnableArenas?: boolean | undefined;
                        objcClassPrefix?: string | undefined;
                        csharpNamespace?: string | undefined;
                        swiftPrefix?: string | undefined;
                        phpClassPrefix?: string | undefined;
                        phpNamespace?: string | undefined;
                        phpMetadataNamespace?: string | undefined;
                        rubyPackage?: string | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[] | undefined;
                            span?: number[] | undefined;
                            leadingComments?: string | undefined;
                            trailingComments?: string | undefined;
                            leadingDetachedComments?: string[] | undefined;
                        }[] | undefined;
                    } | undefined;
                    syntax?: string | undefined;
                }[] | undefined;
            }): _254.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _254.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.FileDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                package?: string | undefined;
                dependency?: string[] | undefined;
                publicDependency?: number[] | undefined;
                weakDependency?: number[] | undefined;
                messageType?: {
                    name?: string | undefined;
                    field?: {
                        name?: string | undefined;
                        number?: number | undefined;
                        label?: _254.FieldDescriptorProto_Label | undefined;
                        type?: _254.FieldDescriptorProto_Type | undefined;
                        typeName?: string | undefined;
                        extendee?: string | undefined;
                        defaultValue?: string | undefined;
                        oneofIndex?: number | undefined;
                        jsonName?: string | undefined;
                        options?: {
                            ctype?: _254.FieldOptions_CType | undefined;
                            packed?: boolean | undefined;
                            jstype?: _254.FieldOptions_JSType | undefined;
                            lazy?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            weak?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    extension?: {
                        name?: string | undefined;
                        number?: number | undefined;
                        label?: _254.FieldDescriptorProto_Label | undefined;
                        type?: _254.FieldDescriptorProto_Type | undefined;
                        typeName?: string | undefined;
                        extendee?: string | undefined;
                        defaultValue?: string | undefined;
                        oneofIndex?: number | undefined;
                        jsonName?: string | undefined;
                        options?: {
                            ctype?: _254.FieldOptions_CType | undefined;
                            packed?: boolean | undefined;
                            jstype?: _254.FieldOptions_JSType | undefined;
                            lazy?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            weak?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    nestedType?: any[] | undefined;
                    enumType?: {
                        name?: string | undefined;
                        value?: {
                            name?: string | undefined;
                            number?: number | undefined;
                            options?: {
                                deprecated?: boolean | undefined;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string | undefined;
                                        isExtension?: boolean | undefined;
                                    }[] | undefined;
                                    identifierValue?: string | undefined;
                                    positiveIntValue?: string | number | import("long").Long | undefined;
                                    negativeIntValue?: string | number | import("long").Long | undefined;
                                    doubleValue?: number | undefined;
                                    stringValue?: Uint8Array | undefined;
                                    aggregateValue?: string | undefined;
                                }[] | undefined;
                            } | undefined;
                        }[] | undefined;
                        options?: {
                            allowAlias?: boolean | undefined;
                            deprecated?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        reservedRange?: {
                            start?: number | undefined;
                            end?: number | undefined;
                        }[] | undefined;
                        reservedName?: string[] | undefined;
                    }[] | undefined;
                    extensionRange?: {
                        start?: number | undefined;
                        end?: number | undefined;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    oneofDecl?: {
                        name?: string | undefined;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    options?: {
                        messageSetWireFormat?: boolean | undefined;
                        noStandardDescriptorAccessor?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        mapEntry?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    reservedRange?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    }[] | undefined;
                    reservedName?: string[] | undefined;
                }[] | undefined;
                enumType?: {
                    name?: string | undefined;
                    value?: {
                        name?: string | undefined;
                        number?: number | undefined;
                        options?: {
                            deprecated?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    options?: {
                        allowAlias?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    reservedRange?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    }[] | undefined;
                    reservedName?: string[] | undefined;
                }[] | undefined;
                service?: {
                    name?: string | undefined;
                    method?: {
                        name?: string | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        options?: {
                            deprecated?: boolean | undefined;
                            idempotencyLevel?: _254.MethodOptions_IdempotencyLevel | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                        clientStreaming?: boolean | undefined;
                        serverStreaming?: boolean | undefined;
                    }[] | undefined;
                    options?: {
                        deprecated?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                extension?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    label?: _254.FieldDescriptorProto_Label | undefined;
                    type?: _254.FieldDescriptorProto_Type | undefined;
                    typeName?: string | undefined;
                    extendee?: string | undefined;
                    defaultValue?: string | undefined;
                    oneofIndex?: number | undefined;
                    jsonName?: string | undefined;
                    options?: {
                        ctype?: _254.FieldOptions_CType | undefined;
                        packed?: boolean | undefined;
                        jstype?: _254.FieldOptions_JSType | undefined;
                        lazy?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        weak?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                options?: {
                    javaPackage?: string | undefined;
                    javaOuterClassname?: string | undefined;
                    javaMultipleFiles?: boolean | undefined;
                    javaGenerateEqualsAndHash?: boolean | undefined;
                    javaStringCheckUtf8?: boolean | undefined;
                    optimizeFor?: _254.FileOptions_OptimizeMode | undefined;
                    goPackage?: string | undefined;
                    ccGenericServices?: boolean | undefined;
                    javaGenericServices?: boolean | undefined;
                    pyGenericServices?: boolean | undefined;
                    phpGenericServices?: boolean | undefined;
                    deprecated?: boolean | undefined;
                    ccEnableArenas?: boolean | undefined;
                    objcClassPrefix?: string | undefined;
                    csharpNamespace?: string | undefined;
                    swiftPrefix?: string | undefined;
                    phpClassPrefix?: string | undefined;
                    phpNamespace?: string | undefined;
                    phpMetadataNamespace?: string | undefined;
                    rubyPackage?: string | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                sourceCodeInfo?: {
                    location?: {
                        path?: number[] | undefined;
                        span?: number[] | undefined;
                        leadingComments?: string | undefined;
                        trailingComments?: string | undefined;
                        leadingDetachedComments?: string[] | undefined;
                    }[] | undefined;
                } | undefined;
                syntax?: string | undefined;
            }): _254.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _254.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.DescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                field?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    label?: _254.FieldDescriptorProto_Label | undefined;
                    type?: _254.FieldDescriptorProto_Type | undefined;
                    typeName?: string | undefined;
                    extendee?: string | undefined;
                    defaultValue?: string | undefined;
                    oneofIndex?: number | undefined;
                    jsonName?: string | undefined;
                    options?: {
                        ctype?: _254.FieldOptions_CType | undefined;
                        packed?: boolean | undefined;
                        jstype?: _254.FieldOptions_JSType | undefined;
                        lazy?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        weak?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                extension?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    label?: _254.FieldDescriptorProto_Label | undefined;
                    type?: _254.FieldDescriptorProto_Type | undefined;
                    typeName?: string | undefined;
                    extendee?: string | undefined;
                    defaultValue?: string | undefined;
                    oneofIndex?: number | undefined;
                    jsonName?: string | undefined;
                    options?: {
                        ctype?: _254.FieldOptions_CType | undefined;
                        packed?: boolean | undefined;
                        jstype?: _254.FieldOptions_JSType | undefined;
                        lazy?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        weak?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                nestedType?: any[] | undefined;
                enumType?: {
                    name?: string | undefined;
                    value?: {
                        name?: string | undefined;
                        number?: number | undefined;
                        options?: {
                            deprecated?: boolean | undefined;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string | undefined;
                                    isExtension?: boolean | undefined;
                                }[] | undefined;
                                identifierValue?: string | undefined;
                                positiveIntValue?: string | number | import("long").Long | undefined;
                                negativeIntValue?: string | number | import("long").Long | undefined;
                                doubleValue?: number | undefined;
                                stringValue?: Uint8Array | undefined;
                                aggregateValue?: string | undefined;
                            }[] | undefined;
                        } | undefined;
                    }[] | undefined;
                    options?: {
                        allowAlias?: boolean | undefined;
                        deprecated?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    reservedRange?: {
                        start?: number | undefined;
                        end?: number | undefined;
                    }[] | undefined;
                    reservedName?: string[] | undefined;
                }[] | undefined;
                extensionRange?: {
                    start?: number | undefined;
                    end?: number | undefined;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                oneofDecl?: {
                    name?: string | undefined;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                options?: {
                    messageSetWireFormat?: boolean | undefined;
                    noStandardDescriptorAccessor?: boolean | undefined;
                    deprecated?: boolean | undefined;
                    mapEntry?: boolean | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                reservedRange?: {
                    start?: number | undefined;
                    end?: number | undefined;
                }[] | undefined;
                reservedName?: string[] | undefined;
            }): _254.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _254.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number | undefined;
                end?: number | undefined;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }): _254.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _254.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number | undefined;
                end?: number | undefined;
            }): _254.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _254.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _254.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.FieldDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                number?: number | undefined;
                label?: _254.FieldDescriptorProto_Label | undefined;
                type?: _254.FieldDescriptorProto_Type | undefined;
                typeName?: string | undefined;
                extendee?: string | undefined;
                defaultValue?: string | undefined;
                oneofIndex?: number | undefined;
                jsonName?: string | undefined;
                options?: {
                    ctype?: _254.FieldOptions_CType | undefined;
                    packed?: boolean | undefined;
                    jstype?: _254.FieldOptions_JSType | undefined;
                    lazy?: boolean | undefined;
                    deprecated?: boolean | undefined;
                    weak?: boolean | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }): _254.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _254.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.OneofDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }): _254.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _254.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.EnumDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                value?: {
                    name?: string | undefined;
                    number?: number | undefined;
                    options?: {
                        deprecated?: boolean | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
                options?: {
                    allowAlias?: boolean | undefined;
                    deprecated?: boolean | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                reservedRange?: {
                    start?: number | undefined;
                    end?: number | undefined;
                }[] | undefined;
                reservedName?: string[] | undefined;
            }): _254.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _254.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number | undefined;
                end?: number | undefined;
            }): _254.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _254.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                number?: number | undefined;
                options?: {
                    deprecated?: boolean | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }): _254.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _254.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                method?: {
                    name?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    options?: {
                        deprecated?: boolean | undefined;
                        idempotencyLevel?: _254.MethodOptions_IdempotencyLevel | undefined;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string | undefined;
                                isExtension?: boolean | undefined;
                            }[] | undefined;
                            identifierValue?: string | undefined;
                            positiveIntValue?: string | number | import("long").Long | undefined;
                            negativeIntValue?: string | number | import("long").Long | undefined;
                            doubleValue?: number | undefined;
                            stringValue?: Uint8Array | undefined;
                            aggregateValue?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                }[] | undefined;
                options?: {
                    deprecated?: boolean | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
            }): _254.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _254.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.MethodDescriptorProto;
            fromPartial(object: {
                name?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                options?: {
                    deprecated?: boolean | undefined;
                    idempotencyLevel?: _254.MethodOptions_IdempotencyLevel | undefined;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string | undefined;
                            isExtension?: boolean | undefined;
                        }[] | undefined;
                        identifierValue?: string | undefined;
                        positiveIntValue?: string | number | import("long").Long | undefined;
                        negativeIntValue?: string | number | import("long").Long | undefined;
                        doubleValue?: number | undefined;
                        stringValue?: Uint8Array | undefined;
                        aggregateValue?: string | undefined;
                    }[] | undefined;
                } | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
            }): _254.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _254.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.FileOptions;
            fromPartial(object: {
                javaPackage?: string | undefined;
                javaOuterClassname?: string | undefined;
                javaMultipleFiles?: boolean | undefined;
                javaGenerateEqualsAndHash?: boolean | undefined;
                javaStringCheckUtf8?: boolean | undefined;
                optimizeFor?: _254.FileOptions_OptimizeMode | undefined;
                goPackage?: string | undefined;
                ccGenericServices?: boolean | undefined;
                javaGenericServices?: boolean | undefined;
                pyGenericServices?: boolean | undefined;
                phpGenericServices?: boolean | undefined;
                deprecated?: boolean | undefined;
                ccEnableArenas?: boolean | undefined;
                objcClassPrefix?: string | undefined;
                csharpNamespace?: string | undefined;
                swiftPrefix?: string | undefined;
                phpClassPrefix?: string | undefined;
                phpNamespace?: string | undefined;
                phpMetadataNamespace?: string | undefined;
                rubyPackage?: string | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.FileOptions;
        };
        MessageOptions: {
            encode(message: _254.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.MessageOptions;
            fromPartial(object: {
                messageSetWireFormat?: boolean | undefined;
                noStandardDescriptorAccessor?: boolean | undefined;
                deprecated?: boolean | undefined;
                mapEntry?: boolean | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.MessageOptions;
        };
        FieldOptions: {
            encode(message: _254.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.FieldOptions;
            fromPartial(object: {
                ctype?: _254.FieldOptions_CType | undefined;
                packed?: boolean | undefined;
                jstype?: _254.FieldOptions_JSType | undefined;
                lazy?: boolean | undefined;
                deprecated?: boolean | undefined;
                weak?: boolean | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.FieldOptions;
        };
        OneofOptions: {
            encode(message: _254.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.OneofOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.OneofOptions;
        };
        EnumOptions: {
            encode(message: _254.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.EnumOptions;
            fromPartial(object: {
                allowAlias?: boolean | undefined;
                deprecated?: boolean | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _254.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _254.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _254.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean | undefined;
                idempotencyLevel?: _254.MethodOptions_IdempotencyLevel | undefined;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string | undefined;
                        isExtension?: boolean | undefined;
                    }[] | undefined;
                    identifierValue?: string | undefined;
                    positiveIntValue?: string | number | import("long").Long | undefined;
                    negativeIntValue?: string | number | import("long").Long | undefined;
                    doubleValue?: number | undefined;
                    stringValue?: Uint8Array | undefined;
                    aggregateValue?: string | undefined;
                }[] | undefined;
            }): _254.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _254.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    namePart?: string | undefined;
                    isExtension?: boolean | undefined;
                }[] | undefined;
                identifierValue?: string | undefined;
                positiveIntValue?: string | number | import("long").Long | undefined;
                negativeIntValue?: string | number | import("long").Long | undefined;
                doubleValue?: number | undefined;
                stringValue?: Uint8Array | undefined;
                aggregateValue?: string | undefined;
            }): _254.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _254.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string | undefined;
                isExtension?: boolean | undefined;
            }): _254.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _254.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[] | undefined;
                    span?: number[] | undefined;
                    leadingComments?: string | undefined;
                    trailingComments?: string | undefined;
                    leadingDetachedComments?: string[] | undefined;
                }[] | undefined;
            }): _254.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _254.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[] | undefined;
                span?: number[] | undefined;
                leadingComments?: string | undefined;
                trailingComments?: string | undefined;
                leadingDetachedComments?: string[] | undefined;
            }): _254.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _254.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[] | undefined;
                    sourceFile?: string | undefined;
                    begin?: number | undefined;
                    end?: number | undefined;
                }[] | undefined;
            }): _254.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _254.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): _254.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[] | undefined;
                sourceFile?: string | undefined;
                begin?: number | undefined;
                end?: number | undefined;
            }): _254.GeneratedCodeInfo_Annotation;
        };
    };
}
