// "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
/**
 * A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($)
 * Subsequent characters can also be digits (0–9).
 */
export const JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX_STRING = "^(_|$|[a-z]|[A-Z])[a-zA-z0-9$_]*$";
export const JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX = new RegExp(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX_STRING);

/**
 * An assignment statement in javascript will consist of three parts
 * 1. assignment keyword (let , const or var) followed by any number of spaces
 * 2. an identifier (a variable) follower by any number of spaces
 * 3. equal sign (=) followed by an expression or a value.
 */
export const ASSINGMENT_STATEMENT_REGEX_STRING = `^(let|const|var)\\s*${JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX_STRING}\\s*=\\s*\\d*;$`;
export const ASSINGMENT_STATEMENT_REGEX = new RegExp(JAVASCRIPT_IDENTIFIER_VALIDATOR_REGEX_STRING);
