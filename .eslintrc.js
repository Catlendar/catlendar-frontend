module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier with recommended settings
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs// e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // eslint rules
    '@typescript-eslint/no-inferrable-types': [
      // 타입 추론이 가능한 경우 명시적인 타입 선언을 금지합니다.
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // 'any' 타입 사용을 금지합니다.
    '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: 'React' }], // 사용되지 않는 변수가 있을 경우 경고합니다.
    'prefer-const': 'warn', // 선언된 변수가 재할당되지 않으면 const를 사용하라는 경고가 발생합니다. 에러가 나게 하려면 이 옵션을 삭제하세요.
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
  },
  settings: {
    'import/resolver': {
      // 이 옵션을 추가하세요
      typescript: {},
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
