(function () {
    const resumeBody = `
<div id="resume-container">
    <div id="resume">
        <div id="page-1" class="resume-page">
            <header class="pb-1 mb-2 md:mb-5 print:mb-5">
                <h1 class="text-2xl md:text-4xl print:text-4xl font-bold uppercase tracking-wide">Gabriel Senra</h1>
                <div class="mt-2 md:mt-4 print:mt-4 flex flex-col space-y-1 md:space-y-2 print:space-y-2 text-gray-600 text-xs md:text-sm print:text-sm">
                    <p class="flex items-center">
                        <svg class="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 mr-2 md:mr-3 print:mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Xaxim - Curitiba/PR
                    </p>
                    <p class="flex items-center">
                        <svg class="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 mr-2 md:mr-3 print:mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        (41) 9 8799-8159
                    </p>
                    <p class="flex items-center">
                        <svg class="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 mr-2 md:mr-3 print:mr-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        fullstackgabe@gmail.com
                    </p>
                    <p class="flex items-center">
                        <svg class="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 mr-2 md:mr-3 print:mr-3 text-teal-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        linkedin.com/in/fullstackgabe
                    </p>
                    <p class="flex items-center">
                        <svg class="w-4 h-4 md:w-5 md:h-5 print:w-5 print:h-5 mr-2 md:mr-3 print:mr-3 text-teal-600" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        github.com/gabriel447
                    </p>
                </div>
            </header>
            <main class="space-y-4 md:space-y-6 print:space-y-6">
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Objetivo</h3>
                    <p class="text-gray-700 text-xs md:text-sm print:text-sm">
Atuar no desenvolvimento de APIs REST e aplicações serverless na AWS com Node.js/TypeScript e PHP/Laravel, e interfaces responsivas em Vue 3.
                    </p>
                </section>
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Habilidades Principais</h3>
                    <div class="grid grid-cols-1 gap-y-1 md:gap-y-2 print:gap-y-2 text-xs md:text-sm print:text-sm text-gray-700">
                        <div><span class="font-semibold">Backend:</span> Node.js, TypeScript, PHP 8+, Laravel.</div>
                        <div><span class="font-semibold">Frontend:</span> HTML5, CSS3, JavaScript ES6+, Vue 3 (Pinia, Composition API).</div>
                        <div><span class="font-semibold">Bancos de Dados:</span> PostgreSQL, MySQL, MongoDB, Redis.</div>
                        <div><span class="font-semibold">DevOps:</span> Docker, AWS (Lambda, S3, SQS, RDS, DynamoDB, API Gateway).</div>
                        <div><span class="font-semibold">Testes Unitários:</span> Pest, Vitest.</div>
                        <div><span class="font-semibold">Gestão e Versionamento:</span> Git & GitHub.</div>
                    </div>
                </section>
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Conhecimentos Adicionais</h3>
                    <div class="text-xs md:text-sm print:text-sm text-gray-700 leading-relaxed">
                        <p>Clean Code, SOLID, Design Patterns, OAuth2, JWT, WebSocket, Bootstrap, Tailwind CSS.</p>
                    </div>
                </section>
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Formação Acadêmica</h3>
                    <div class="space-y-2 md:space-y-4 print:space-y-4">
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-lg print:text-lg font-semibold text-gray-800">Análise e Desenvolvimento de Sistemas</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Mar 2020 - Ago 2022</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">Universidade Positivo</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Idiomas</h3>
                    <div class="flex space-x-8 text-xs md:text-sm print:text-sm text-gray-700">
                        <p><span class="font-semibold">Inglês:</span> Intermediário (B1)</p>
                    </div>
                </section>
                <section>
                    <h3 class="text-sm md:text-lg print:text-lg font-bold uppercase tracking-wider mb-1">Experiências Profissionais</h3>
                    <div class="space-y-4 md:space-y-6 print:space-y-6">
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-base print:text-base font-semibold text-gray-800">Desenvolvedor Full Stack</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Fev 2024 - Set 2025</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">Nova Gestões Assessoria Financeira</p>
                            <ul class="list-disc list-outside ml-4 md:ml-5 print:ml-5 space-y-0.5 md:space-y-1 print:space-y-1 text-xs md:text-sm print:text-sm text-gray-700">
                                <li>Refatoração e modernização de código legado em PHP.</li>
                                <li>Desenvolvimento de APIs REST com Node.js e AWS SAM (Serverless Application Model).</li>
                                <li>Correção de vulnerabilidades em queries (SQL Injection).</li>
                                <li>Otimização de consultas utilizando Redis.</li>
                                <li>Criação de interfaces responsivas com HTML5, CSS3, jQuery e Bootstrap.</li>
                                <li>Escrita de código com cobertura de testes em PHPUnit.</li>
                                <li>Monitoramento de aplicações com New Relic e CloudWatch.</li>
                                <li>Gestão de tarefas e versionamento de código com Jira e Bitbucket.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
        <div id="page-2" class="resume-page hidden">
            <main class="space-y-4 md:space-y-6 print:space-y-6">
                <section>
                    <div class="space-y-4 md:space-y-6 print:space-y-6 pt-2">
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-lg print:text-lg font-semibold text-gray-900">Analista de Suporte de TI</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Fev 2023 - Fev 2024</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">Nova Gestões Assessoria Financeira</p>
                            <ul class="list-disc list-outside ml-4 md:ml-5 print:ml-5 space-y-0.5 md:space-y-1 print:space-y-1 text-xs md:text-sm print:text-sm text-gray-700">
                                <li>Instalação e atualização de sistemas operacionais (Linux, Windows).</li>
                                <li>Configuração de redes (IP, Proxy, DNS, DHCP).</li>
                                <li>Atendimento de chamados via RDP e VPN.</li>
                                <li>Manutenção de hardware e substituição de periféricos.</li>
                                <li>Gerenciamento de usuários, grupos e políticas no Active Directory (AD).</li>
                                <li>Configuração de ramais VoIP (Linphone) via protocolo SIP.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-lg print:text-lg font-semibold text-gray-900">Técnico de TI</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Out 2021 - Mar 2022</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">Techbra Tecnologia</p>
                            <ul class="list-disc list-outside ml-4 md:ml-5 print:ml-5 space-y-0.5 md:space-y-1 print:space-y-1 text-xs md:text-sm print:text-sm text-gray-700">
                                <li>Testes e diagnóstico de defeitos em dispositivos móveis, tablets e laptops.</li>
                                <li>Triagem, gestão de fluxo e manutenção de hardware/software.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-lg print:text-lg font-semibold text-gray-800">Operador de Datacenter</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Mar 2019 - Mar 2020</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">OTG Open Technologies Group</p>
                            <ul class="list-disc list-outside ml-4 md:ml-5 print:ml-5 space-y-0.5 md:space-y-1 print:space-y-1 text-xs md:text-sm print:text-sm text-gray-700">
                                <li>Monitoramento de infraestrutura e suporte a técnicos no local.</li>
                                <li>Execução de checklists operacionais e medição de temperatura.</li>
                                <li>Mapeamento de racks, servidores e cabeamento de fibra óptica.</li>
                                <li>Registro de incidentes e monitoramento de alertas de segurança.</li>
                            </ul>
                        </div>
                        <div class="experience-item">
                            <div class="flex justify-between items-baseline mb-1">
                                <h4 class="text-sm md:text-lg print:text-lg font-semibold text-gray-800">Técnico de TI</h4>
                                <span class="text-xs md:text-sm print:text-sm font-medium text-gray-600">Ago 2016 - Jul 2019</span>
                            </div>
                            <p class="text-gray-700 font-medium mb-1 md:mb-2 print:mb-2 text-xs md:text-sm print:text-sm">Hardfix Assistência Técnica</p>
                            <ul class="list-disc list-outside ml-4 md:ml-5 print:ml-5 space-y-0.5 md:space-y-1 print:space-y-1 text-xs md:text-sm print:text-sm text-gray-700">
                                <li>Manutenção corretiva e preventiva de desktops, laptops, celulares e tablets (hardware e software).</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    </div>
</div>`;

    const resumeStyles = `
        body { font-family: 'Roboto', sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; margin: 0; background-color: white; }
        #resume-container { width: 100%; display: block; }
        #resume { background-color: white; width: 210mm; margin: 0 auto; padding: 10mm 20mm; }
        h1 { color: #111827; }
        h2 { color: #0d9488; }
        h3 { color: #0f766e; }
        @page { size: A4; margin: 0; }
        @media print {
            body { background-color: white; margin: 0; }
            #resume-container { display: block !important; padding: 0 !important; height: auto !important; overflow: visible !important; }
            #resume { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 10mm 20mm 16mm !important; box-shadow: none !important; min-height: auto !important; transform: none !important; }
            .resume-page { display: block !important; height: auto !important; page-break-after: always; }
            .resume-page:last-child { page-break-after: auto; }
            section, .experience-item { break-inside: avoid; }
            #page-1, #page-2 { display: block !important; }
            #page-2 { padding-top: 15mm !important; }
        }
    `;

    function buildDocument() {
        return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>cv-gabriel-senra-dev</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>${resumeStyles}</style>
</head>
<body>
${resumeBody}
<script>
(function () {
    function notifyDone() {
        if (window.parent && window.parent !== window) {
            window.parent.postMessage('resume-print-done', '*');
        }
    }
    function doPrint() {
        document.getElementById('page-2').classList.remove('hidden');
        window.focus();
        window.print();
        notifyDone();
    }
    window.addEventListener('load', function () { setTimeout(doPrint, 600); });
})();
<\/script>
</body>
</html>`;
    }

    function downloadResume(btn) {
        const label = btn ? btn.querySelector('span') : null;
        const originalLabel = label ? label.textContent : null;
        const originalDocTitle = document.title;
        if (btn) btn.disabled = true;
        if (label) label.textContent = 'Abrindo...';
        document.title = 'cv-gabriel-senra-dev';

        const iframe = document.createElement('iframe');
        iframe.style.cssText = 'position:fixed;left:-9999px;top:0;width:210mm;height:297mm;border:0;';
        document.body.appendChild(iframe);

        function cleanup() {
            window.removeEventListener('message', onMessage);
            if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
            if (btn) btn.disabled = false;
            if (label) label.textContent = originalLabel;
            document.title = originalDocTitle;
        }
        function onMessage(e) {
            if (e.data === 'resume-print-done') setTimeout(cleanup, 500);
        }
        window.addEventListener('message', onMessage);
        setTimeout(cleanup, 60000);

        iframe.srcdoc = buildDocument();
    }

    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('baixar-cv-btn');
        if (btn) btn.addEventListener('click', function () { downloadResume(btn); });
    });
})();
