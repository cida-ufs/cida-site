import React from 'react';
import { publicacoesPT, publicacoesEN, publicacoesFR } from '../../Data';
import shapeOne from '../../assets/shape-1.png';
import { useTranslation } from 'react-i18next';
import './publicacoes.css';

const Publications = () => {
    const { t, i18n } = useTranslation();

    // Seleciona o conjunto de dados com base no idioma
    const data = i18n.language === 'fr' ? publicacoesFR 
                : i18n.language === 'en' ? publicacoesEN 
                : publicacoesPT; // Padrão para português

    return (
        <section className="publicacoes section" id="publicacoes">
            <h2 className="section__title text-cs">{t('publicationsTitle')}</h2>
            <p className="section__subtitle">
                {/*Nossos <span>Trabalhos</span>*/}
            </p>

            <div className="publications__container container grid">
                {
                    data.map(({ id, title, authors, details, doi, pdf }, index) => {
                        const articleLabel = i18n.language === 'fr' ? 'Voir l’article'
                            : i18n.language === 'en' ? 'View article'
                            : 'Ver artigo';

                        return (
                            <article className="publication__item" key={`${id}-${index}`}>
                                <div className="publication__header">
                                    <span className="publication__tag">{id}</span>
                                    {pdf && <span className="publication__type">PDF</span>}
                                </div>

                                <h3 className="publication__title">{title}</h3>

                                <p className="publication__authors">
                                    {authors.join(', ')}
                                </p>

                                {details && (
                                    <p className="publication__details">
                                        {details}
                                    </p>
                                )}

                                {doi && (
                                    <p className="publication__doi">
                                        doi: {doi}
                                    </p>
                                )}

                                <div className="publication__actions">
                                    {pdf && (
                                        <a
                                            className="publication__pdf"
                                            href={pdf}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {articleLabel}
                                        </a>
                                    )}
                                </div>
                            </article>
                        )
                    })
                }
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title"></span>
            </div>
        </section>
    );
};

export default Publications;
