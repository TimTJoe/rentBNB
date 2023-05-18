import { SearchRounded, Clear } from '@mui/icons-material'
import { InputAdornment, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'


const Container = styled.div`
    margin: 12px;
`

const Input = styled(TextField)`

    && .MuiInputBase-root {
        border-radius: 23px;
        background-color: #f3f3f5;
        border-color: transparent;
    }

    && .MuiInputBase-root input {
        border-top-right-radius: 23px;
        border-bottom-right-radius: 23px;
        color: #50555a;
    }

    && .MuiInputBase-root fieldset {
        border-color: transparent;
    }
`


function Search({data}) {
    const [value, setValue] = useState("")
    const inputRef = useRef("inputRef")
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (e) => { setValue(e.target.value) }
    const handleFocus = () => { inputRef.current.focus() }

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const results = data.filter((item) => {
            // Perform your search logic here
            // For example, search within a specific property like 'name'
            return item.name.toLowerCase().includes(query);
        });

        setSearchResults(results);
    };

    return (
        <Container>
            <Input
                ref={inputRef}
                placeholder='Search Agents'
                size="small"
                variant="outlined"
                value={searchQuery}
                onChange={handleSearch}
                // onChange={handleChange}
                // value={value}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            onClick={handleFocus}
                            position="start">
                            <SearchRounded />
                        </InputAdornment>
                    ),
                }}
            />
            <ul>
                {searchResults.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </Container>
    )
}

export default Search