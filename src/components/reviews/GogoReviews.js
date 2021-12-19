import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import {
    Container,
    Logo,
    DownArrow,
    ErrorMsg,
    Options,
    OptionsSelected,
    OthersTextArea,
    QuestionNumber,
    QuestionTitle,
    UpArrow,
    EmptyStar,
    HalfStar,
    FilledStar,
    Subtext,
    OthersTextAreaSmall,
    SubmitButton,
    NameInput,
    HorizontalDivider,
    NameQuestion,
    GetStartedContainer,
    GetStartedText,
} from './styles';

import {
    ModalContainer,
    ModalText,
    ModalWrapper,
    CloseModalButton,
    TopText,
    BottomText,
} from './Modal.styles';

import ProgressBar from './progressBar';
import ReactStars from 'react-rating-stars-component';
import gogoLogo from '../../assets/gogo-properties/gogo-logo.png';
import ReviewSubmittedModal from './ReviewSubmittedModal';

const GogoReviews = () => {
    const form = useRef();

    const [selected, setSelected] = useState([]);
    const [q2selected, setQ2Selected] = useState([]);
    const [q1TextArea, setQ1TextArea] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [starRating, setStarRating] = useState(0);
    const [q4TextArea, setQ4TextArea] = useState('');
    const [q5TextArea, setQ5TextArea] = useState('');
    const [q6YesTextArea, setQ6YesTextArea] = useState('');
    const [q6NoTextArea, setQ6NoTextArea] = useState('');

    const [nameInputValue, setNameInputValue] = useState('');

    const [showStartScreen, setShowStartScreen] = useState(true);
    const [showQ1, setShowQ1] = useState(false);
    const [showQ2, setShowQ2] = useState(false);
    const [showQ3, setShowQ3] = useState(false);
    const [showQ4, setShowQ4] = useState(false);
    const [showQ5, setShowQ5] = useState(false);
    const [showQ6, setShowQ6] = useState(false);
    const [showSubmit, setShowSubmit] = useState(false);

    const [showModal, setShowModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    // const openModal = () => {
    //     setShowModal((prev) => !prev);
    // };

    useEffect(() => {
        document.title = 'Reviews | GoGoProperties ';
    }, []);

    const options = [
        {
            name: 'Google',
            id: 1,
        },
        {
            name: 'Facebook',
            id: 2,
        },
        {
            name: 'Instagram',
            id: 3,
        },
        {
            name: 'Referral',
            id: 4,
        },
    ];

    const q2options = ['Yes', 'No'];

    const starConfiqs = {
        emptyIcon: <EmptyStar></EmptyStar>,
        halfIcon: <HalfStar></HalfStar>,
        filledIcon: <FilledStar></FilledStar>,
        isHalf: true,
        count: 5,
        size: 35,
        value: starRating,
        onChange: (newValue) => {
            setStarRating(newValue);
        },
    };

    const clearForm = () => {
        setSelected([]);
        setQ2Selected([]);
        setQ1TextArea('');
        setErrorMsg('');
        setStarRating(0);
        setQ4TextArea('');
        setQ5TextArea('');
        setQ6YesTextArea('');
        setQ6NoTextArea('');
        setNameInputValue('');
    };

    const handleSelected = (name) => {
        if (selected.includes(name)) {
            setSelected((prevSelected) =>
                prevSelected.filter((s) => s !== name)
            );
        } else {
            setSelected((prevSelected) => [...prevSelected, name]);
        }
    };

    const handleSelectedQ2 = (answer) => {
        setQ2Selected(answer);
    };

    const goToQ1 = () => {
        if (!nameInputValue.trim().length) {
            setErrorMsg('Answer required');
        } else {
            setErrorMsg('');
            setShowQ2(false);
            setShowQ1(true);
            setShowStartScreen(false);
        }
    };

    const goToQ2 = () => {
        if (!selected.length && !q1TextArea.trim().length) {
            setErrorMsg('Answer required');
        } else {
            setShowQ2(true);
            setShowQ1(false);
            setShowQ3(false);
            setErrorMsg('');
        }
    };

    const goToQ3 = () => {
        if (!q2selected.length) {
            setErrorMsg('Answer required');
        } else {
            setShowQ3(true);
            setShowQ2(false);
            setShowQ4(false);
            setErrorMsg('');
        }
    };

    const goToQ4 = () => {
        if (starRating === 0) {
            setErrorMsg('Answer required');
        } else {
            setShowQ3(false);
            setShowQ4(true);
            setErrorMsg('');
            setShowQ5(false);
        }
    };

    const goToQ5 = () => {
        if (!q4TextArea.trim().length) {
            setErrorMsg('Answer required');
        } else {
            setShowQ4(false);
            setShowQ5(true);
            setShowQ6(false);
            setErrorMsg('');
        }
    };

    const goToQ6 = () => {
        if (!q5TextArea.trim().length) {
            setErrorMsg('Answer required');
        } else {
            setShowQ5(false);
            setShowQ6(true);
            setErrorMsg('');
            setShowSubmit(false);
        }
    };

    const goToSubmit = () => {
        if (!q6NoTextArea.trim().length && !q6YesTextArea.trim().length) {
            setErrorMsg('Answer required');
        } else if (q6NoTextArea.length && q6YesTextArea.length) {
            setErrorMsg('Please input only one text answer');
        } else {
            setShowQ6(false);
            setShowSubmit(true);
            setErrorMsg('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nameInputValue.trim().length) {
            setErrorMsg('Answer required');
        } else {
            console.log('submit pressed');
            emailjs
                .send(
                    'orca-gmail',
                    'gogoproperties-review',
                    {
                        from_name: nameInputValue,
                        q1Ans: selected.toString(),
                        OthersTextArea: q1TextArea,
                        q2Ans: q2selected,
                        q3Ans: starRating,
                        q4Ans: q4TextArea,
                        q5Ans: q5TextArea,
                        q6Ans: q6YesTextArea || q6NoTextArea,
                    },
                    'user_b6crgEYtKgRbl2caV6b5h'
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        setShowStartScreen(true);
                        setShowModal(true);
                        setShowSubmit(false);
                        clearForm();
                    },
                    (error) => {
                        console.log(error.text);
                        setShowErrorModal(true);
                    }
                );
        }
    };

    if (showModal) {
        return (
            <ReviewSubmittedModal
                showModal={showModal}
                setShowModal={setShowModal}
            />
        );
    }

    if (showErrorModal) {
        return (
            <ModalContainer>
                <ModalWrapper>
                    <TopText>Sorry</TopText>
                    <BottomText>An error has occured</BottomText>
                    <ModalText>
                        If this problem persist, please contact Amanda for
                        assistance.
                    </ModalText>
                    <CloseModalButton
                        aria-label="Close modal"
                        onClick={() => setShowErrorModal((prev) => !prev)}
                    />
                </ModalWrapper>
            </ModalContainer>
        );
    }
    return (
        <div
            style={{
                width: '100vw',
                backgroundColor: '#122a4b',
                height: '100vh',
            }}
        >
            <form ref={form} onSubmit={handleSubmit}>
                <Container>
                    {showStartScreen ? (
                        <>
                            <Logo src={gogoLogo} />
                            <HorizontalDivider />
                            <NameQuestion>Fill in your name</NameQuestion>
                            <NameInput
                                placeholder={'Your name'}
                                value={nameInputValue}
                                onChange={(e) =>
                                    setNameInputValue(e.target.value)
                                }
                            />
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <GetStartedContainer onClick={() => goToQ1()}>
                                <GetStartedText>Get started</GetStartedText>
                            </GetStartedContainer>
                        </>
                    ) : null}
                    {showQ1 ? (
                        <>
                            <div style={{ marginTop: 80 }}></div>
                            <ProgressBar bgcolor="#FEB700" completed="0" />
                            <QuestionNumber style={{ marginTop: -10 }}>
                                1.
                            </QuestionNumber>
                            <QuestionTitle>
                                How did you find out about GoGo Properties?
                            </QuestionTitle>
                            {options.map((option) => (
                                <div
                                    onClick={() => handleSelected(option.name)}
                                >
                                    {selected.includes(option.name) ? (
                                        <OptionsSelected>
                                            {option.name}
                                        </OptionsSelected>
                                    ) : (
                                        <Options>{option.name}</Options>
                                    )}
                                </div>
                            ))}
                            <OthersTextAreaSmall
                                placeholder={'Others'}
                                value={q1TextArea}
                                onChange={(e) => setQ1TextArea(e.target.value)}
                            ></OthersTextAreaSmall>
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToQ2();
                                }}
                            />
                        </>
                    ) : null}

                    {showQ2 ? (
                        <>
                            <div style={{ marginTop: 200 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ1();
                                }}
                            />
                            <ProgressBar bgcolor="#FEB700" completed="20" />
                            <QuestionNumber> 2.</QuestionNumber>
                            <QuestionTitle>
                                Did you successfully purchase, sell, or rent a
                                property with GogoProperties?
                            </QuestionTitle>
                            {q2options.map((option) => (
                                <div onClick={() => handleSelectedQ2(option)}>
                                    {q2selected === option ? (
                                        <OptionsSelected>
                                            {option}
                                        </OptionsSelected>
                                    ) : (
                                        <Options>{option}</Options>
                                    )}
                                </div>
                            ))}

                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToQ3();
                                }}
                            />
                        </>
                    ) : null}

                    {showQ3 ? (
                        <>
                            <div style={{ marginTop: 200 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ2();
                                }}
                            />
                            <ProgressBar bgcolor="#FEB700" completed="40" />
                            <QuestionNumber> 3. </QuestionNumber>
                            <QuestionTitle>
                                How would you rate your experience of
                                purchasing/renting/selling your property with
                                GogoProperties' Property Advisor?
                            </QuestionTitle>
                            <div
                                style={{
                                    alignSelf: 'center',
                                    marginLeft: 30,
                                }}
                            >
                                <ReactStars {...starConfiqs} />,
                            </div>
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToQ4();
                                }}
                            />
                        </>
                    ) : null}

                    {showQ4 ? (
                        <>
                            <div style={{ marginTop: 200 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ3();
                                }}
                            />
                            <ProgressBar bgcolor="#FEB700" completed="60" />
                            <QuestionNumber> 4. </QuestionNumber>
                            <QuestionTitle>
                                How has GoGoProperties helped you in
                                successfully finding what you need?
                            </QuestionTitle>
                            <OthersTextArea
                                placeholder={
                                    'GoGoProperties has helped me in...'
                                }
                                value={q4TextArea}
                                onChange={(e) => setQ4TextArea(e.target.value)}
                            ></OthersTextArea>
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToQ5();
                                }}
                            />
                        </>
                    ) : null}

                    {showQ5 ? (
                        <>
                            <div style={{ marginTop: 200 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ4();
                                }}
                            />
                            <ProgressBar bgcolor="#FEB700" completed="75" />
                            <QuestionNumber> 5. </QuestionNumber>
                            <QuestionTitle>
                                Could you describe some areas of service you
                                were satisfied with?
                                <Subtext>
                                    E.g. Responsiveness, Clarity, Advice,
                                    Knowledge, etc.
                                </Subtext>
                            </QuestionTitle>
                            <OthersTextArea
                                placeholder={'I was satisfied with...'}
                                value={q5TextArea}
                                onChange={(e) => setQ5TextArea(e.target.value)}
                            ></OthersTextArea>
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToQ6();
                                }}
                            />
                        </>
                    ) : null}

                    {showQ6 ? (
                        <>
                            <div style={{ marginTop: 120 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ5();
                                }}
                                style={{ top: '70px' }}
                            />
                            <ProgressBar bgcolor="#FEB700" completed="90" />
                            <QuestionNumber style={{ marginTop: -10 }}>
                                6.
                            </QuestionNumber>
                            <QuestionTitle>
                                Would you recommend GoGoProperties to people who
                                potentially require Property Advisory services?
                            </QuestionTitle>
                            <OthersTextArea
                                placeholder={'If yes, why?'}
                                value={q6YesTextArea}
                                onChange={(e) =>
                                    setQ6YesTextArea(e.target.value)
                                }
                                style={{ height: 120 }}
                            ></OthersTextArea>
                            <OthersTextArea
                                placeholder={'If no, why?'}
                                value={q6NoTextArea}
                                onChange={(e) =>
                                    setQ6NoTextArea(e.target.value)
                                }
                                style={{ height: 120 }}
                            ></OthersTextArea>
                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <DownArrow
                                onClick={() => {
                                    goToSubmit();
                                }}
                            />
                        </>
                    ) : null}

                    {showSubmit ? (
                        <>
                            <div style={{ marginTop: 220 }}></div>
                            <UpArrow
                                onClick={() => {
                                    goToQ6();
                                }}
                            />

                            <ProgressBar bgcolor="#FEB700" completed="100" />

                            <ErrorMsg>{errorMsg}</ErrorMsg>
                            <SubmitButton type="button" value={'Submit'} />
                        </>
                    ) : null}
                </Container>
            </form>
        </div>
    );
};

export default GogoReviews;
