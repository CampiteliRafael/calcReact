# Calculadora React

Uma calculadora moderna e responsiva desenvolvida em React, com interface inspirada na calculadora do iOS.

## 🚀 Funcionalidades

- ✅ Operações básicas (adição, subtração, multiplicação, divisão)
- ✅ Função de porcentagem
- ✅ Mudança de sinal (+/-)
- ✅ Função limpar (C)
- ✅ Suporte a números decimais
- ✅ Interface responsiva
- ✅ Design moderno e intuitivo
- ✅ Animações suaves nos botões

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção da interface
- **CSS3** - Estilização e animações
- **HTML5** - Estrutura da aplicação

## 📁 Estrutura do Projeto

```
calculadora-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Calculadora.js
│   │   ├── Calculadora.css
│   │   ├── Display.js
│   │   ├── Display.css
│   │   ├── Botao.js
│   │   └── Botao.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Componentes

### 1. **Calculadora** (Componente Principal)
- Gerencia o estado da aplicação
- Controla a lógica das operações matemáticas
- Coordena a interação entre Display e Botões

### 2. **Display**
- Exibe o valor atual da calculadora
- Formata números grandes e decimais
- Interface limpa e legível

### 3. **Botao**
- Componente reutilizável para todos os botões
- Diferentes estilos para números, operações e funções
- Animações de hover e click

## 🚀 Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Execute o projeto:**
   ```bash
   npm start
   ```

3. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

## 📱 Responsividade

A calculadora é totalmente responsiva e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout completo com botões grandes
- **Tablet**: Ajustes de tamanho mantendo usabilidade
- **Mobile**: Interface otimizada para toque

## 🎨 Design

- **Cores**: Esquema escuro moderno
- **Tipografia**: Fonte monospace para o display
- **Animações**: Transições suaves nos botões
- **Layout**: Grid flexível e responsivo

## 🧮 Funcionalidades da Calculadora

### Operações Básicas
- **Adição (+)**: Soma dois números
- **Subtração (−)**: Subtrai o segundo número do primeiro
- **Multiplicação (×)**: Multiplica dois números
- **Divisão (÷)**: Divide o primeiro número pelo segundo

### Funções Especiais
- **C (Clear)**: Limpa todos os valores e reinicia
- **± (Toggle Sign)**: Alterna entre positivo e negativo
- **% (Percentage)**: Converte o número em porcentagem
- **, (Decimal)**: Adiciona ponto decimal

---

Desenvolvido com ❤️ usando React